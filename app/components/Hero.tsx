export default function Hero() {
  return (
    <section className="relative w-full h-[70vh] overflow-hidden bg-black">
      {/* Video de fondo a 80vh */}
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
