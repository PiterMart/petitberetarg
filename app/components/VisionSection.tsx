"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const MANIFESTO_TEXT =
  "Francia nos enseñó a beber bien, Petit Beret nos enseña a beber mejor. Hemos unido la alquimia de los mejores sommeliers con el respeto por la naturaleza para crear el Gin y el Vermouth del futuro. Bebidas orgánicas, premiadas internacionalmente y diseñadas para quienes buscan calidad premium sin el peso del alcohol.";

function Word({
  word,
  progress,
  range,
}: {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.35, 1]);
  const color = useTransform(progress, range, ["#9ca3af", "#09090b"]);

  return (
    <motion.span
      style={{ opacity, color }}
      className="inline transition-colors duration-150"
    >
      {word}{" "}
    </motion.span>
  );
}

export default function VisionSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.35"],
  });

  const words = MANIFESTO_TEXT.split(" ");
  const totalWords = words.length;

  return (
    <section
      ref={containerRef}
      className="w-full bg-white text-zinc-900 py-16 sm:py-24 border-b border-zinc-200 text-center"
    >
      <div className="max-w-3xl mx-auto px-6 sm:px-8 flex flex-col items-center justify-center space-y-6 sm:space-y-8">
        
        {/* Logo ISO */}
        <div className="relative w-14 h-14 sm:w-16 sm:h-16">
          <Image
            src="/PB_fond_noir-ISO.avif"
            alt="Le Petit Beret Iso Logo"
            fill
            sizes="64px"
            className="object-contain"
            priority
          />
        </div>

        {/* Badge: Nuestra visión */}
        <span className="inline-block text-xs font-semibold tracking-[0.2em] text-zinc-500 uppercase font-roboto border-b border-zinc-300 pb-1">
          Nuestra visión
        </span>

        {/* Párrafo normal en negrita con altura de línea de 2rem */}
        <p className="font-roboto text-xl sm:text-2xl md:text-3xl font-bold leading-[2rem] text-center max-w-2xl text-zinc-900">
          {words.map((word, i) => {
            const start = i / totalWords;
            const end = (i + 1) / totalWords;
            return (
              <Word
                key={i}
                word={word}
                progress={scrollYProgress}
                range={[start, end]}
              />
            );
          })}
        </p>

      </div>
    </section>
  );
}
