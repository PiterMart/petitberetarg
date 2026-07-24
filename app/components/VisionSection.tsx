"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const MANIFESTO_LINES = [
  "A la libertad de celebrar como se debe,",
  "según sus gustos, según sus elecciones.",
  "A la excelencia del patrimonio vitivinícola francés, sin el alcohol.",
  "A los aromas, a las notas, al placer de los sentidos.",
  "A las mesas más exigentes, las estrelladas pero también la suya.",
  "A las burbujas, a las cepas, a los cocktails... siempre sin alcohol.",
  "Al Arte de invitar a todos a brindar,",
  "A ese primer brindis que al fin podemos compartir todos juntos.",
];

function Character({
  char,
  progress,
  range,
}: {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block">
      {char}
    </motion.span>
  );
}

function Word({
  word,
  progress,
  wordStart,
  wordEnd,
}: {
  word: string;
  progress: MotionValue<number>;
  wordStart: number;
  wordEnd: number;
}) {
  const chars = word.split("");
  const charStep = (wordEnd - wordStart) / chars.length;

  return (
    <span className="inline-block whitespace-nowrap">
      {chars.map((char, i) => {
        const start = wordStart + i * charStep;
        const end = start + charStep;
        return (
          <Character
            key={i}
            char={char}
            progress={progress}
            range={[start, end]}
          />
        );
      })}
    </span>
  );
}

function Line({
  text,
  progress,
  lineStart,
  lineEnd,
}: {
  text: string;
  progress: MotionValue<number>;
  lineStart: number;
  lineEnd: number;
}) {
  const words = text.split(" ");
  const wordStep = (lineEnd - lineStart) / words.length;

  return (
    <div className="flex flex-wrap justify-center text-center gap-x-[0.25em]">
      {words.map((word, i) => {
        const start = lineStart + i * wordStep;
        const end = start + wordStep;
        return (
          <Word
            key={i}
            word={word}
            progress={progress}
            wordStart={start}
            wordEnd={end}
          />
        );
      })}
    </div>
  );
}

export default function VisionSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.35"],
  });

  return (
    <section
      ref={containerRef}
      className="w-full bg-white text-zinc-900 py-16 md:py-32 border-b border-zinc-200 text-center"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center justify-center space-y-8 sm:space-y-10">
        
        {/* Logo ISO en la parte superior: PB_fond_noir-ISO */}
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24">
          <Image
            src="/PB_fond_noir-ISO.avif"
            alt="Le Petit Beret Iso Logo"
            fill
            sizes="(max-width: 768px) 64px, 96px"
            className="object-contain"
            priority
          />
        </div>

        {/* Badge: Nuestra visión */}
        <span className="inline-block text-xs font-semibold tracking-widest text-zinc-500 uppercase font-roboto border-b border-zinc-300 pb-1">
          Nuestra visión
        </span>

        {/* Texto del Manifiesto: palabras protegidas de ruptura e interlineado/tamaño fluido en móvil */}
        <div className="oswald-custom uppercase tracking-wider max-w-4xl space-y-1 sm:space-y-1.5 leading-tight text-zinc-900 font-black">
          {MANIFESTO_LINES.map((line, idx) => {
            const lineStart = idx / MANIFESTO_LINES.length;
            const lineEnd = (idx + 1) / MANIFESTO_LINES.length;
            return (
              <Line
                key={idx}
                text={line}
                progress={scrollYProgress}
                lineStart={lineStart}
                lineEnd={lineEnd}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}
