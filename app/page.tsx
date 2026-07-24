import Image from "next/image";
import Hero from "./components/Hero";
import VisionSection from "./components/VisionSection";
import ConceptSection, { ConceptSectionProps } from "./components/ConceptSection";
import Drinks from "./components/Drinks";

const conceptsData: ConceptSectionProps[] = [
  {
    title: "ORIGEN",
    badge: "Nuestra Historia",
    subtitle: "Un nuevo arte de vivir desde Francia",
    imageSrc: "/french-winery.webp",
    imageAlt: "Historia y origen de Le Petit Beret",
    paragraphs: [
      "Le Petit Beret nació en Francia con una idea simple pero ambiciosa: que nadie tenga que renunciar al ritual del brindis, la copa compartida o el aperitivo entre amigos por no beber alcohol.",
      "Su fundador, Fathi Benni, quiso reinventar los códigos del vino y los espirituosos franceses, construyendo el proyecto con una mezcla de audacia e innovación constante, sin perder de vista la excelencia y el saber hacer que caracteriza al patrimonio vitivinícola francés.",
      "Así, lo que comenzó como una idea se transformó en un movimiento: un nuevo arte de vivir que invita a todos, beban o no alcohol, a sentarse a la misma mesa y brindar juntos, sin excepción. Hoy Le Petit Beret reúne una gama de vinos (tintos, blancos y rosados), espumantes, cervezas y espirituosos, todos 0% alcohol, pensados para acompañar cualquier momento: desde una mesa cotidiana hasta las mesas más exigentes. Cada botella representa una promesa de la marca: ofrecer un placer auténtico, inclusivo y genuinamente compartido.",
    ],
  },
  {
    title: "PROCESO",
    badge: "Innovación & Calidad",
    subtitle: "0% Alcohol desde el origen y sustentabilidad",
    imageSrc: "/brunch.jpg",
    imageAlt: "Proceso y escudo de calidad Petit Shield",
    paragraphs: [
      "El corazón del proceso de Le Petit Beret es una innovación clave: la ausencia total de alcohol desde el origen. A diferencia de los vinos desalcoholizados tradicionales, que primero fermentan con alcohol y luego se lo extraen, esta marca desarrolló un método patentado junto a enólogos y expertos en extracción natural que preserva la integridad aromática de la fruta sin que el alcohol llegue a producirse en ningún momento.",
      "Esto tiene beneficios concretos: menos pasos y menos impacto, ya que al ser un proceso más simple y sobrio que la desalcoholización clásica, reduce el número de etapas, el consumo de energía y las transformaciones necesarias.",
      "Además, gracias a este circuito corto, la marca logra reducir en un 70% su huella de carbono frente al método de desalcoholización tradicional. Al no pasar por fermentación alcohólica ni por procesos agresivos de extracción posterior, se conservan mejor los aromas naturales de la fruta. El proceso está además certificado Halal, ya que no hay fermentación alcohólica en ningún punto de la producción. El resultado son bebidas refinadas, naturales y accesibles para todo tipo de consumidor, sin sacrificar sofisticación ni sabor.",
    ],
  },
  {
    title: "ESTILO DE VIDA",
    badge: "Fitness & Wellness",
    subtitle: "El placer de brindar sin comprometer tu bienestar",
    imageSrc: "/lifestyle.webp",
    imageAlt: "Estilo de vida y momentos Le Petit Beret",
    paragraphs: [
      "Le Petit Beret encaja de forma natural con un estilo de vida consciente y activo por varias razones. Al no producirse alcohol en ningún momento del proceso (y no eliminarse después), se evitan los residuos y trazas que sí pueden quedar en algunos productos desalcoholizados.",
      "Varias referencias de la gama están pensadas como alternativa a bebidas azucaradas tradicionales, ideales para quienes cuidan su ingesta calórica sin renunciar al placer de un buen vino o cóctel. Al eliminar el alcohol, no interfiere con el sueño, la hidratación ni la recuperación física, aspectos clave para cualquier rutina fitness.",
      "Además permite seguir participando de los momentos sociales (comidas, brindis, aperitivos) sin comprometer objetivos de salud, entrenamiento o bienestar. El circuito corto y la reducción del 70% en huella de carbono conectan con los valores de sostenibilidad que suele valorar la comunidad wellness, y la trazabilidad de sus productos resuena con consumidores que leen etiquetas y buscan calidad certificada.",
      "En conjunto, la marca se posiciona no como una bebida sin alcohol resignada, sino como una alternativa premium que permite mantener el ritual social y el placer sensorial dentro de un estilo de vida saludable y activo.",
    ],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-amber-400 selection:text-black">
      {/* Componente Hero con video fullscreen 100vh */}
      <Hero />

      {/* Main Content: Vision Section, Concept Sections & Drinks */}
      <main className="divide-y divide-zinc-200">
        <VisionSection />
        {conceptsData.map((concept) => (
          <ConceptSection key={concept.title} {...concept} />
        ))}
        <Drinks />
      </main>

      {/* Footer con Isotipo Le Petit Beret e Instagram @lepetitberet_ar */}
      <footer className="py-12 text-center text-zinc-600 font-roboto text-sm border-t border-zinc-200 bg-zinc-50 flex flex-col items-center justify-center space-y-5">
        <div className="relative w-12 h-12">
          <Image
            src="/PB_fond_noir-ISO.avif"
            alt="Le Petit Beret Iso Logo"
            fill
            sizes="48px"
            className="object-contain opacity-80"
          />
        </div>

        {/* Link a Instagram @lepetitberet_ar */}
        <a
          href="https://www.instagram.com/lepetitberet_ar"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-zinc-800 hover:text-zinc-950 font-medium transition-colors border border-zinc-300 hover:border-zinc-500 rounded-full px-4 py-1.5 text-xs tracking-wider uppercase bg-white shadow-xs"
        >
          <svg
            className="w-4 h-4"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
              clipRule="evenodd"
            />
          </svg>
          <span>@lepetitberet_ar</span>
        </a>

        <p>© {new Date().getFullYear()} Le Petit Beret. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
