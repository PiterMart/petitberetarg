"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export interface ConceptSectionProps {
  title: string;
  subtitle?: string;
  paragraphs: string[];
  imageSrc?: string;
  images?: string[];
  imageAlt?: string;
  badge?: string;
}

export default function ConceptSection({
  title,
  subtitle,
  paragraphs,
  imageSrc,
  images,
  imageAlt = "Imagen representativa",
  badge,
}: ConceptSectionProps) {
  // Manejo de carrusel cuando hay múltiples imágenes
  const imageList = images && images.length > 0 ? images : imageSrc ? [imageSrc] : [];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    if (imageList.length > 1) {
      setCurrentIndex((prev) => (prev + 1) % imageList.length);
    }
  }, [imageList.length]);

  const prevSlide = useCallback(() => {
    if (imageList.length > 1) {
      setCurrentIndex((prev) => (prev - 1 + imageList.length) % imageList.length);
    }
  }, [imageList.length]);

  // Auto-play del carrusel cada 4 segundos si hay más de 1 imagen
  useEffect(() => {
    if (imageList.length > 1) {
      const timer = setInterval(() => {
        nextSlide();
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [imageList.length, nextSlide]);

  return (
    <section className="w-full py-12 md:py-24 border-b border-zinc-200 last:border-b-0 bg-white text-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-0 lg:px-12 flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
        
        {/* COLUMNA 1: IMAGEN CON ANIMACIÓN DE ENTRADA SUAVE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="w-full lg:w-1/2 min-h-[360px] sm:min-h-[480px] lg:min-h-[580px] relative bg-zinc-50 border-y lg:border border-zinc-200 overflow-hidden flex items-center justify-center shrink-0"
        >
          {imageList.length > 0 ? (
            <>
              {/* Imágenes del Carrusel / Imagen única */}
              {imageList.map((src, idx) => (
                <div
                  key={src}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out flex items-center justify-center p-0 ${
                    idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                  }`}
                >
                  <Image
                    src={src}
                    alt={`${imageAlt} - ${idx + 1}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover md:object-contain p-0 md:p-2"
                    priority={idx === 0}
                  />
                </div>
              ))}

              {/* Botones de navegación del Carrusel (Si hay más de 1 imagen) */}
              {imageList.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    aria-label="Imagen anterior"
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-black/40 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer"
                  >
                    ‹
                  </button>
                  <button
                    onClick={nextSlide}
                    aria-label="Siguiente imagen"
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-black/40 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer"
                  >
                    ›
                  </button>

                  {/* Indicadores de Puntos (Dots) */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                    {imageList.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        aria-label={`Ir a la imagen ${idx + 1}`}
                        className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                          idx === currentIndex
                            ? "bg-zinc-900 w-6"
                            : "bg-zinc-400 hover:bg-zinc-700"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </>
          ) : (
            <div className="flex flex-col items-center justify-center p-8 text-center space-y-3 text-zinc-500 h-full">
              <span className="font-oswald text-xl font-bold tracking-wider text-zinc-800 uppercase">
                [ Espacio para Imagen: {title} ]
              </span>
            </div>
          )}
        </motion.div>

        {/* COLUMNA 2: CONTENEDOR DE TEXTO CON ANIMACIÓN REVELADORA SUAVE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 space-y-6 px-6 lg:px-0"
        >
          {badge && (
            <span className="inline-block text-xs font-semibold tracking-widest text-zinc-500 uppercase font-roboto border-b border-zinc-300 pb-1">
              {badge}
            </span>
          )}

          <h2 className="font-oswald text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 uppercase">
            {title}
          </h2>

          {subtitle && (
            <p className="text-amber-800 font-roboto text-lg font-medium">
              {subtitle}
            </p>
          )}

          <div className="space-y-4 font-roboto text-zinc-700 text-base md:text-lg leading-relaxed font-light">
            {paragraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
