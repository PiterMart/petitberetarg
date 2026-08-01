"use client";

import Image from "next/image";
// import { useRef } from "react";
// import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const PARAGRAPH_1 =
  "Bebidas orgánicas, premiadas internacionalmente y diseñadas para quienes buscan calidad premium sin el peso del alcohol.";

const PARAGRAPH_2 =
  "Hemos unido la alquimia de los mejores sommeliers, el respeto por la naturaleza y la tendencia mundial saludable para crear las bebidas del futuro. El principio rector de nuestras creaciones es ir más allá de lo que existe hoy en día, sin comprometer el gusto, el respeto por el medio ambiente ni la experiencia, proponiendo productos inclusivos para todos.";

/* 
 * PRESORTED FOR FUTURE SCROLL REVEAL IMPLEMENTATION:
 *
 * function Word({
 *   word,
 *   progress,
 *   range,
 *   activeColor = "#09090b",
 * }: {
 *   word: string;
 *   progress: MotionValue<number>;
 *   range: [number, number];
 *   activeColor?: string;
 * }) {
 *   const opacity = useTransform(progress, range, [0.35, 1]);
 *   const color = useTransform(progress, range, ["#9ca3af", activeColor]);
 * 
 *   return (
 *     <motion.span
 *       style={{ opacity, color }}
 *       className="inline transition-colors duration-150"
 *     >
 *       {word}{" "}
 *     </motion.span>
 *   );
 * }
 */

export default function VisionSection() {
  /*
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.35"],
  });
  */

  return (
    <section className="w-full bg-white text-zinc-900 py-16 sm:py-24 border-b border-zinc-200 text-center">
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

        <div className="space-y-6 sm:space-y-8 max-w-3xl text-center my-4">

          {/* Primer párrafo de la visión (Texto superior - Tamaño Grande) */}
          <p className="font-roboto text-xl sm:text-2xl md:text-3xl font-medium leading-snug text-center text-zinc-900">
            {PARAGRAPH_1}
          </p>

          {/* Segundo párrafo de la visión (Texto inferior - Tamaño más pequeño) */}
          <p className="font-roboto text-base sm:text-lg md:text-xl font-normal leading-relaxed text-center text-zinc-700">
            {PARAGRAPH_2}
          </p>

        </div>

      </div>
    </section>
  );
}
