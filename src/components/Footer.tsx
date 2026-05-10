export default function Footer() {
  return (
    <div
      className="relative h-[400px] sm:h-[600px] lg:h-[800px] max-h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+400px)] sm:h-[calc(100vh+600px)] lg:h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[400px] sm:h-[600px] lg:h-[800px] sticky top-[calc(100vh-400px)] sm:top-[calc(100vh-600px)] lg:top-[calc(100vh-800px)]">
          <div className="bg-neutral-950 py-4 sm:py-6 lg:py-8 px-4 sm:px-6 h-full w-full flex flex-col justify-between">
            <div className="flex shrink-0 gap-8 sm:gap-12 lg:gap-20">
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-neutral-500 text-xs sm:text-sm tracking-widest">О сайте</h3>
                <a
                  href="#myths"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Мифы о питании
                </a>
                <a
                  href="#calculator"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Калькулятор БЖУ
                </a>
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-neutral-500 text-xs sm:text-sm tracking-widest">Темы</h3>
                <span className="text-neutral-400 text-sm sm:text-base">Белки и мышцы</span>
                <span className="text-neutral-400 text-sm sm:text-base">Спортивные БАДы</span>
                <span className="text-neutral-400 text-sm sm:text-base">Углеводы</span>
                <span className="text-neutral-400 text-sm sm:text-base">Водный баланс</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0">
              <h1 className="text-[16vw] sm:text-[14vw] lg:text-[12vw] leading-[0.8] mt-4 sm:mt-6 lg:mt-10 text-white font-bold tracking-tight">
                SPORTFOOD
              </h1>
              <p className="text-neutral-600 text-sm sm:text-base">{new Date().getFullYear()} SportFood</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
