"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export interface ConceptSectionProps {
  title: string;
  subtitle?: string;
  paragraphs: (string | React.ReactNode)[];
  imageSrc?: string;
  images?: string[];
  imageAlt?: string;
  badge?: string;
  isOpen?: boolean;
  onToggle?: () => void;
}

export default function ConceptSection({
  title,
  subtitle,
  paragraphs,
  imageSrc,
  images,
  imageAlt = "Imagen representativa",
  badge,
  isOpen = false,
  onToggle,
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

  // Auto-play del carrusel cada 4 segundos si está abierto y tiene más de 1 imagen
  useEffect(() => {
    if (isOpen && imageList.length > 1) {
      const timer = setInterval(() => {
        nextSlide();
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [isOpen, imageList.length, nextSlide]);

  return (
    <div className="w-full bg-white text-zinc-900 overflow-hidden border-b border-zinc-200">
      
      {/* 100vw LÍNEA / BOTÓN DE TÍTULO CLICKEABLE */}
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full py-8 sm:py-10 px-6 sm:px-12 lg:px-20 bg-white hover:bg-zinc-50/80 transition-colors flex items-center justify-between cursor-pointer text-left group focus:outline-none"
      >
        <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
          <h2 className="font-oswald text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-900 uppercase group-hover:text-[#800020] transition-colors duration-200">
            {title}
          </h2>
          {badge && (
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-zinc-400 uppercase font-roboto group-hover:text-[#800020] transition-colors duration-200">
              — {badge}
            </span>
          )}
        </div>

        {/* Ícono Interactivo + / - sin círculo */}
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-3xl sm:text-4xl md:text-5xl font-light text-zinc-900 group-hover:text-[#800020] transition-colors duration-200 shrink-0 ml-4 select-none"
        >
          +
        </motion.div>
      </button>

      {/* CONTENIDO DESPLEGABLE CON ANIMACIÓN DE ALTURA SUAVE */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden bg-zinc-50/50 border-t border-zinc-100"
          >
            <div className="w-full py-10 md:py-16">
              <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 flow-root">
                
                {/* COLUMNA 1: IMAGEN FLOTANTE (SIN BORDES NI SOMBRAS, TAMAÑO MÁXIMO) */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="w-full lg:w-[48%] xl:w-[52%] lg:float-left lg:mr-10 lg:mb-6 mb-8 relative h-[360px] sm:h-[480px] lg:h-[520px] xl:h-[580px] overflow-hidden rounded-none border-0 shadow-none bg-transparent"
                >
                  {imageList.length > 0 ? (
                    <>
                      {/* Imágenes */}
                      {imageList.map((src, idx) => (
                        <div
                          key={src}
                          className={`absolute inset-0 transition-opacity duration-700 ease-in-out flex items-center justify-center ${
                            idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                          }`}
                        >
                          <Image
                            src={src}
                            alt={`${imageAlt} - ${idx + 1}`}
                            fill
                            sizes="(max-width: 1024px) 100vw, 55vw"
                            className="object-cover rounded-none p-0"
                            priority={idx === 0}
                          />
                        </div>
                      ))}

                      {/* Botones de navegación del Carrusel */}
                      {imageList.length > 1 && (
                        <>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              prevSlide();
                            }}
                            aria-label="Imagen anterior"
                            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-black/40 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer"
                          >
                            ‹
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              nextSlide();
                            }}
                            aria-label="Siguiente imagen"
                            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-black/40 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer"
                          >
                            ›
                          </button>

                          {/* Indicadores de Puntos */}
                          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                            {imageList.map((_, idx) => (
                              <button
                                key={idx}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setCurrentIndex(idx);
                                }}
                                aria-label={`Ir a la imagen ${idx + 1}`}
                                className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                                  idx === currentIndex
                                    ? "bg-white w-6"
                                    : "bg-white/50 hover:bg-white"
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

                {/* COLUMNA 2: CONTENEDOR DE TEXTO QUE RODEA LA IMAGEN */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="space-y-6 text-left"
                >
                  {subtitle && (
                    <p className="text-[#800020] font-roboto text-lg md:text-xl lg:text-2xl font-medium">
                      {subtitle}
                    </p>
                  )}

                  <div className="space-y-4 font-roboto text-zinc-700 text-base md:text-lg leading-relaxed font-light">
                    {paragraphs.map((paragraph, idx) => (
                      <div key={idx}>{paragraph}</div>
                    ))}
                  </div>
                </motion.div>

              </div>

              {/* Botón simple de cerrar al final de la sección */}
              <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 pt-8 md:pt-10 flex justify-end clear-both">
                <button
                  onClick={onToggle}
                  className="text-xs font-medium tracking-wider text-zinc-500 hover:text-[#800020] uppercase font-roboto underline underline-offset-4 cursor-pointer transition-colors"
                >
                  Cerrar
                </button>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
