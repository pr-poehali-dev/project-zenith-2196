import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/0be03b5b-e30e-49c0-a4f2-41aa3891d977/files/84d02138-5215-4762-8b3b-fd40f981a52c.jpg"
          alt="Спортсмен на тренировке"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/50 z-[1]" />
      <div className="relative z-10 text-center text-white px-6">
        <p className="uppercase tracking-widest text-sm mb-4 opacity-80">Питание для спортсменов</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-tight">
          МИФ ИЛИ<br />ПРАВДА?
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 leading-relaxed">
          Разбираем 4 главных заблуждения о спортивном питании и учим считать БЖУ правильно
        </p>
        <a
          href="#myths"
          className="inline-block mt-10 px-8 py-3 border border-white text-white uppercase tracking-wide text-sm hover:bg-white hover:text-black transition-all duration-300"
        >
          Узнать правду
        </a>
      </div>
    </div>
  );
}