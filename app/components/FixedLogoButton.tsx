"use client";

import Image from "next/image";

export default function FixedLogoButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Volver al inicio"
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 p-0 bg-transparent border-none shadow-none outline-none hover:scale-105 active:scale-95 transition-transform duration-300 cursor-pointer mix-blend-difference"
    >
      <Image
        src="/Petit_Beret_fond_noir.avif"
        alt="Le Petit Beret Logo"
        width={180}
        height={70}
        priority
        className="w-auto h-8 sm:h-10 md:h-12 object-contain"
      />
    </button>
  );
}
