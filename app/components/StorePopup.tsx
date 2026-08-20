"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function StorePopup() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    // Show popup modal after a slight delay
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  // Handle ESC key to close modal into bottom-right CTA
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isModalOpen) {
        handleCloseModal();
      }
    };
    if (isModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsMinimized(true);
  };

  const handleReopenModal = () => {
    setIsMinimized(false);
    setIsModalOpen(true);
  };

  return (
    <>
      {/* Centered Modal Popup */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs transition-all duration-300 animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-labelledby="popup-title"
          onClick={handleCloseModal}
        >
          <div
            className="relative w-full max-w-md bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-zinc-100 flex flex-col items-center text-center transform transition-all duration-300 scale-100 animate-scaleUp overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Decorative Wine Line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#800020] via-amber-600 to-[#800020]" />

            {/* Close Button - Minimizes to bottom right */}
            <button
              onClick={handleCloseModal}
              aria-label="Minimizar a la esquina inferior"
              title="Cerrar y mantener acceso a la tienda"
              className="absolute top-3.5 right-3.5 p-2 text-zinc-400 hover:text-zinc-800 transition-colors rounded-full hover:bg-zinc-100 cursor-pointer"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Brand Iso Logo */}
            <div className="relative w-12 h-12 mb-4 mt-2">
              <Image
                src="/PB_fond_noir-ISO.avif"
                alt="Le Petit Beret"
                fill
                sizes="48px"
                className="object-contain"
              />
            </div>

            {/* Titular */}
            <h2
              id="popup-title"
              className="font-oswald text-2xl sm:text-3xl font-bold uppercase text-zinc-900 tracking-tight leading-snug mb-3"
            >
              ¿Buscás sumarnos a tu bodega?
            </h2>

            {/* Bajada */}
            <p className="font-roboto text-sm sm:text-base text-zinc-600 leading-relaxed mb-6 max-w-xs sm:max-w-sm">
              Encontrá todos nuestros varietales franceses 0.0% orgánicos con envío a todo el país.
            </p>

            {/* Botón (CTA) */}
            <a
              href="https://lepetitberet.com.ar/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 w-full py-3.5 px-6 rounded-xl font-oswald text-base tracking-wider uppercase bg-[#800020] text-white hover:bg-[#600018] active:scale-[0.98] transition-all shadow-md hover:shadow-lg cursor-pointer"
            >
              <span>IR A LA TIENDA OFICIAL</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>
      )}

      {/* Floating Bottom Right CTA Button when modal is closed */}
      {isMinimized && (
        <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2 animate-bounceIn">
          <a
            href="https://lepetitberet.com.ar/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-oswald text-sm sm:text-base tracking-wider uppercase bg-[#800020] text-white hover:bg-[#600018] active:scale-95 transition-all shadow-2xl hover:shadow-red-950/40 border border-white/20 cursor-pointer"
          >
            <span>IR A LA TIENDA OFICIAL</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>

          {/* Optional button to reopen full info modal if desired */}
          <button
            onClick={handleReopenModal}
            aria-label="Reabrir información"
            title="Ver más información"
            className="w-8 h-8 rounded-full bg-zinc-900/80 hover:bg-zinc-900 text-white flex items-center justify-center backdrop-blur-xs transition-colors shadow-lg cursor-pointer text-xs font-bold"
          >
            ?
          </button>
        </div>
      )}
    </>
  );
}
