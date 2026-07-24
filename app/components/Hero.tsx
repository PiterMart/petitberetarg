export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Video de fondo a pantalla completa 100vh sin bordes */}
      <video
        src="/PetitberetVideo.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
    </section>
  );
}
