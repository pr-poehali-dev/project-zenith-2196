import { useState } from "react";

type Goal = "loss" | "maintain" | "gain";
type Activity = "low" | "medium" | "high" | "very_high";

const activityLabels: Record<Activity, string> = {
  low: "Низкая (1–2 тренировки/нед)",
  medium: "Средняя (3–4 тренировки/нед)",
  high: "Высокая (5–6 тренировок/нед)",
  very_high: "Очень высокая (ежедневно)",
};

const activityMultipliers: Record<Activity, number> = {
  low: 1.375,
  medium: 1.55,
  high: 1.725,
  very_high: 1.9,
};

const goalLabels: Record<Goal, string> = {
  loss: "Похудение",
  maintain: "Поддержание",
  gain: "Набор массы",
};

const goalAdjust: Record<Goal, number> = {
  loss: -300,
  maintain: 0,
  gain: 300,
};

interface Result {
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
}

export default function BJUCalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState<"male" | "female">("male");
  const [activity, setActivity] = useState<Activity>("medium");
  const [goal, setGoal] = useState<Goal>("maintain");
  const [result, setResult] = useState<Result | null>(null);

  const calculate = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);
    if (!w || !h || !a) return;

    const bmr =
      sex === "male"
        ? 10 * w + 6.25 * h - 5 * a + 5
        : 10 * w + 6.25 * h - 5 * a - 161;

    const tdee = Math.round(bmr * activityMultipliers[activity]);
    const calories = tdee + goalAdjust[goal];

    const protein = Math.round(w * 2);
    const fat = Math.round((calories * 0.25) / 9);
    const carbs = Math.round((calories - protein * 4 - fat * 9) / 4);

    setResult({ calories, protein, fat, carbs });
  };

  return (
    <div id="calculator" className="bg-neutral-950 px-6 py-20 lg:py-32">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <p className="uppercase text-xs tracking-widest text-neutral-500 mb-4">Персональный расчёт</p>
          <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
            Твой правильный<br />рацион в цифрах
          </h2>
          <p className="text-neutral-400 mt-4 max-w-xl">
            Введи свои данные — получи точные нормы калорий, белков, жиров и углеводов для достижения цели.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-5">
            <div className="flex gap-4">
              {(["male", "female"] as const).map((s) => (
                <button
                  key={s}
                  onClick={() => setSex(s)}
                  className={`flex-1 py-3 text-sm uppercase tracking-wide border transition-all duration-200 ${
                    sex === s
                      ? "bg-white text-black border-white"
                      : "bg-transparent text-neutral-400 border-neutral-700 hover:border-neutral-500"
                  }`}
                >
                  {s === "male" ? "Мужчина" : "Женщина"}
                </button>
              ))}
            </div>

            {[
              { label: "Вес (кг)", value: weight, setter: setWeight, placeholder: "80" },
              { label: "Рост (см)", value: height, setter: setHeight, placeholder: "180" },
              { label: "Возраст (лет)", value: age, setter: setAge, placeholder: "28" },
            ].map((field) => (
              <div key={field.label}>
                <label className="block text-neutral-400 text-xs uppercase tracking-wide mb-2">
                  {field.label}
                </label>
                <input
                  type="number"
                  value={field.value}
                  onChange={(e) => field.setter(e.target.value)}
                  placeholder={field.placeholder}
                  className="w-full bg-neutral-900 border border-neutral-700 text-white px-4 py-3 text-base focus:outline-none focus:border-neutral-400 transition-colors"
                />
              </div>
            ))}

            <div>
              <label className="block text-neutral-400 text-xs uppercase tracking-wide mb-2">
                Активность
              </label>
              <select
                value={activity}
                onChange={(e) => setActivity(e.target.value as Activity)}
                className="w-full bg-neutral-900 border border-neutral-700 text-white px-4 py-3 text-base focus:outline-none focus:border-neutral-400 transition-colors"
              >
                {(Object.keys(activityLabels) as Activity[]).map((key) => (
                  <option key={key} value={key}>
                    {activityLabels[key]}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-neutral-400 text-xs uppercase tracking-wide mb-2">
                Цель
              </label>
              <div className="flex gap-2">
                {(Object.keys(goalLabels) as Goal[]).map((g) => (
                  <button
                    key={g}
                    onClick={() => setGoal(g)}
                    className={`flex-1 py-2 text-xs uppercase tracking-wide border transition-all duration-200 ${
                      goal === g
                        ? "bg-white text-black border-white"
                        : "bg-transparent text-neutral-400 border-neutral-700 hover:border-neutral-500"
                    }`}
                  >
                    {goalLabels[g]}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={calculate}
              className="w-full py-4 bg-white text-black uppercase tracking-widest text-sm font-bold hover:bg-neutral-200 transition-colors duration-200"
            >
              Рассчитать
            </button>
          </div>

          <div className="flex flex-col justify-center">
            {result ? (
              <div className="space-y-4">
                <div className="border border-neutral-700 p-6">
                  <p className="text-neutral-500 text-xs uppercase tracking-wide mb-1">Калории в день</p>
                  <p className="text-5xl font-bold text-white">{result.calories}</p>
                  <p className="text-neutral-500 text-sm mt-1">ккал</p>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: "Белки", value: result.protein, unit: "г", color: "text-blue-400" },
                    { label: "Жиры", value: result.fat, unit: "г", color: "text-yellow-400" },
                    { label: "Углеводы", value: result.carbs, unit: "г", color: "text-green-400" },
                  ].map((macro) => (
                    <div key={macro.label} className="border border-neutral-700 p-4 text-center">
                      <p className="text-neutral-500 text-xs uppercase tracking-wide mb-2">{macro.label}</p>
                      <p className={`text-3xl font-bold ${macro.color}`}>{macro.value}</p>
                      <p className="text-neutral-600 text-xs mt-1">{macro.unit}</p>
                    </div>
                  ))}
                </div>
                <p className="text-neutral-600 text-xs leading-relaxed pt-2">
                  Расчёт по формуле Миффлина-Сан Жеора. Значения являются ориентировочными — корректируй рацион исходя из самочувствия и прогресса.
                </p>
              </div>
            ) : (
              <div className="border border-neutral-800 p-8 text-center">
                <p className="text-neutral-600 text-lg mb-2">Введи данные</p>
                <p className="text-neutral-700 text-sm">
                  Заполни форму слева и нажми «Рассчитать» — результат появится здесь
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
