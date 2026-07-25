"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const HERO_VIDEOS = [
  "/herovideos/1.mp4",
  "/herovideos/2.mp4",
  "/herovideos/3.mp4",
];

export default function Hero() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoEnded = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % HERO_VIDEOS.length);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log("Autoplay prevented or interrupted:", err);
      });
    }
  }, [currentVideoIndex]);

  return (
    <section className="relative w-full h-[90vh] overflow-hidden bg-black flex items-center justify-center">
      {/* Video de fondo en secuencia numerada 1 -> 2 -> 3 */}
      <video
        ref={videoRef}
        src={HERO_VIDEOS[currentVideoIndex]}
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnded}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none transition-opacity duration-500"
      />

      {/* Capa de oscurecimiento suave para mejorar visibilidad del logo */}
      <div className="absolute inset-0 bg-black/25 pointer-events-none" />

      {/* Logo Le Petit Beret centrado en el componente HERO */}
      <div className="relative z-10 w-64 sm:w-80 md:w-96 lg:w-[420px] h-24 sm:h-32 md:h-40 flex items-center justify-center p-4">
        <Image
          src="/Petit_Beret_fond_noir.avif"
          alt="Le Petit Beret Logo"
          fill
          sizes="(max-width: 768px) 320px, 420px"
          className="object-contain filter invert drop-shadow-xl"
          priority
        />
      </div>
    </section>
  );
}
