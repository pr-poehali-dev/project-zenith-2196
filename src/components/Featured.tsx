const myths = [
  {
    id: "01",
    myth: "Чем больше белка — тем лучше для мышц",
    truth:
      "Мышцы растут не от количества белка, а от его достаточности. Оптимум — 1,6–2,2 г на кг веса. Излишки просто выводятся или откладываются как жир.",
    label: "МИФ О БЕЛКЕ",
  },
  {
    id: "02",
    myth: "Без спортивных БАДов прогресса не будет",
    truth:
      "Добавки — это 5% результата. Реальный прогресс строится на грамотном питании, тренировках и восстановлении. БАДы лишь закрывают дефициты при несбалансированном рационе.",
    label: "МИФ О БАДах",
  },
  {
    id: "03",
    myth: "Углеводы — враг, особенно вечером",
    truth:
      "Углеводы — главное топливо для тренировок. Вечером они помогают восстановлению мышц. Важно не время приёма, а общий суточный баланс калорий.",
    label: "МИФ ОБ УГЛЕВОДАХ",
  },
  {
    id: "04",
    myth: "Нужно много пить, а во время тренировки — нельзя",
    truth:
      "Пить нужно по жажде: 30–40 мл на кг веса в день. Во время тренировки вода необходима — потеря 2% жидкости снижает силу и выносливость на 20%.",
    label: "МИФ О ВОДЕ",
  },
];

export default function Featured() {
  return (
    <div id="myths" className="bg-white px-6 py-20 lg:py-32">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="uppercase text-xs tracking-widest text-neutral-400 mb-4">Развенчиваем заблуждения</p>
          <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900 leading-tight max-w-2xl">
            4 мифа о спортивном питании
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-200">
          {myths.map((item) => (
            <div key={item.id} className="bg-white p-8 lg:p-12 flex flex-col justify-between min-h-[320px]">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs uppercase tracking-widest text-neutral-400">{item.label}</span>
                  <span className="text-4xl font-bold text-neutral-100">{item.id}</span>
                </div>
                <div className="mb-4">
                  <span className="inline-block bg-red-50 text-red-600 text-xs uppercase tracking-wide px-3 py-1 mb-4">
                    Миф
                  </span>
                  <p className="text-xl lg:text-2xl font-semibold text-neutral-900 leading-snug">
                    {item.myth}
                  </p>
                </div>
              </div>
              <div className="border-t border-neutral-100 pt-6">
                <span className="inline-block bg-green-50 text-green-700 text-xs uppercase tracking-wide px-3 py-1 mb-3">
                  Правда
                </span>
                <p className="text-neutral-600 leading-relaxed">{item.truth}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
