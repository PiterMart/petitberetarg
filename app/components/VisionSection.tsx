"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const HIGHLIGHT_LINES = [
  "Francia nos enseñó a beber bien,",
  "Petit Beret nos enseña a beber mejor.",
];

const BODY_PARAGRAPH =
  "Hemos unido la alquimia de los mejores sommeliers con el respeto por la naturaleza para crear el Gin y el Vermouth del futuro. Bebidas orgánicas, premiadas internacionalmente y diseñadas para quienes buscan calidad premium sin el peso del alcohol.";

function Word({
  word,
  progress,
  range,
  activeColor = "#09090b",
}: {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
  activeColor?: string;
}) {
  const opacity = useTransform(progress, range, [0.35, 1]);
  const color = useTransform(progress, range, ["#9ca3af", activeColor]);

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

  const highlightWords = HIGHLIGHT_LINES.flatMap((line) => line.split(" "));
  const bodyWords = BODY_PARAGRAPH.split(" ");
  const totalWords = highlightWords.length + bodyWords.length;

  let globalWordIndex = 0;

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

        <div className="space-y-6 max-w-2xl text-center">
          
          {/* Primeras dos líneas destacadas en su contenedor propio con 5vh de margen superior e inferior */}
          <div className="my-[5vh] space-y-1">
            {HIGHLIGHT_LINES.map((lineText, lineIdx) => {
              const lineWords = lineText.split(" ");
              return (
                <h3
                  key={lineIdx}
                  className="font-roboto text-xl sm:text-2xl md:text-3xl font-bold leading-tight text-center text-zinc-900"
                >
                  {lineWords.map((word) => {
                    const currentIndex = globalWordIndex++;
                    const start = currentIndex / totalWords;
                    const end = (currentIndex + 1) / totalWords;
                    return (
                      <Word
                        key={currentIndex}
                        word={word}
                        progress={scrollYProgress}
                        range={[start, end]}
                        activeColor="#09090b"
                      />
                    );
                  })}
                </h3>
              );
            })}
          </div>

          {/* El resto del texto como un párrafo normal (font-light, leading-relaxed, text-zinc-700) */}
          <p className="font-roboto text-base sm:text-lg md:text-xl font-light leading-relaxed text-center text-zinc-700">
            {bodyWords.map((word) => {
              const currentIndex = globalWordIndex++;
              const start = currentIndex / totalWords;
              const end = (currentIndex + 1) / totalWords;
              return (
                <Word
                  key={currentIndex}
                  word={word}
                  progress={scrollYProgress}
                  range={[start, end]}
                  activeColor="#3f3f46"
                />
              );
            })}
          </p>

        </div>

      </div>
    </section>
  );
}
