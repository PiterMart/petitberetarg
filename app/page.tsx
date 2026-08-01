import Image from "next/image";
import Hero from "./components/Hero";
import VisionSection from "./components/VisionSection";
import ConceptsAccordion from "./components/ConceptsAccordion";
import Drinks from "./components/Drinks";

const conceptsData = [
  {
    title: "ORIGEN",
    badge: "Nuestra Historia",
    subtitle: "Un nuevo arte de vivir desde Francia",
    imageSrc: "/french-winery.webp",
    imageAlt: "Historia y origen de Le Petit Beret",
    paragraphs: [
      "La historia de Le Petit Béret comienza en Béziers, en el corazón de la región vitivinícola del Languedoc, Francia. Fue fundada por Fathi Benni, un ingeniero agrónomo apasionado por la innovación en la industria alimentaria. Su visión era crear una alternativa inclusiva al vino para quienes no consumen alcohol por salud, convicción o religión, para lo cual se asoció con Dominique Laporte, nombrado Mejor Sumiller de Francia. Juntos se propusieron el reto de estructurar bebidas con el perfil aromático de la coctelería tradicional pero totalmente libres de alcohol.",
      "Tras más de cinco años de investigación, colaboraron con el prestigioso instituto científico de investigación agrícola INRAE, clave para llegar a desarrollar un proceso de elaboración patentado que evita completamente la fermentación alcohólica. A diferencia de las bebidas desalcoholizadas comunes, Le Petit Béret trabaja directamente con un método que preserva los polifenoles, antioxidantes y aromas naturales sin someter al producto a procesos químicos agresivos.",
      "La marca apostó desde sus inicios por un perfil saludable: certificaciones de agricultura ecológica, bajo en azúcar y 100% vegano. En 2015 lanzaron formalmente sus primeras colecciones de bebidas y la propuesta captó rápidamente la atención de la alta gastronomía por su capacidad para maridar platillos complejos.",
      "Desde ese tiempo, la firma comenzó a acumular reconocimientos y premios en concursos internacionales de cata a ciegas y con el impulso del movimiento global sober curious, la demanda se expandió aceleradamente fuera de Francia.",
      "Por último la empresa diversificó su oferta incorporando líneas de espumosos de burbuja fina y perfil refinado, así como las cervezas y botánicos aperitivos 0,0%.",
      "La compañía mantiene un fuerte compromiso ecológico, apoyando la biodiversidad y a los viticultores locales del Languedoc, demostrando que era posible crear una categoría premium sin recurrir a la fermentación tradicional.",
      "Actualmente, Le Petit Béret exporta a más de 40 países y está presente en hoteles, restaurantes y tiendas gourmet representando la convergencia entre la alta sommelería francesa y la innovación técnica al servicio de la inclusión.",
    ],
  },
  {
    title: "PROCESO",
    badge: "Innovación & Calidad",
    subtitle: "0% Alcohol desde el origen y sustentabilidad",
    imageSrc: "/brunch.jpg",
    imageAlt: "Proceso y escudo de calidad Petit Shield",
    paragraphs: [
      "El corazón del proceso de Le Petit Beret es una innovación clave: la ausencia total de alcohol desde el origen. A diferencia de los vinos desalcoholizados tradicionales, que primero fermentan con alcohol y luego se lo extraen, esta marca desarrolló un método patentado junto a enólogos y expertos en extracción natural que preserva la integridad aromática de la fruta sin que el alcohol llegue a producirse en ningún momento. Esto tiene beneficios concretos: menos pasos y menos impacto, ya que al ser un proceso más simple y sobrio que la desalcoholización clásica, reduce el número de etapas, el consumo de energía y las transformaciones necesarias. Cabe destacar que la marca logra reducir en un 70% su huella de carbono frente al método de desalcoholización tradicional.",
      "Otro de sus beneficios es que el proceso está certificado Halal, ya que no hay fermentación alcohólica en ningún punto de la producción. El resultado son bebidas refinadas, naturales y accesibles para todo tipo de consumidor, sin sacrificar sofisticación ni sabor.",
      (
        <ul key="proceso-highlights" className="space-y-3 mt-4 pt-3 border-t border-zinc-200">
          <li className="flex items-start gap-3 text-zinc-800">
            <Image
              src="/uvas.png"
              alt="Uvas icon"
              width={20}
              height={20}
              className="w-5 h-5 object-contain shrink-0 mt-0.5"
            />
            <span><strong className="text-zinc-900 font-semibold">Absolutamente 0.0% alcohol:</strong> no existe riesgo de trazas residuales al no haber fermentado.</span>
          </li>
          <li className="flex items-start gap-3 text-zinc-800">
            <Image
              src="/uvas.png"
              alt="Uvas icon"
              width={20}
              height={20}
              className="w-5 h-5 object-contain shrink-0 mt-0.5"
            />
            <span>Mantiene intactos los antioxidantes naturales (polifenoles, resveratrol) y reduce sustancialmente el aporte calórico.</span>
          </li>
          <li className="flex items-start gap-3 text-zinc-800">
            <Image
              src="/uvas.png"
              alt="Uvas icon"
              width={20}
              height={20}
              className="w-5 h-5 object-contain shrink-0 mt-0.5"
            />
            <span><strong className="text-zinc-900 font-semibold">Certificación e inclusión:</strong> Apto para veganos, halal, mujeres embarazadas, conductores y deportistas.</span>
          </li>
        </ul>
      ),
    ],
  },
  {
    title: "ESTILO DE VIDA",
    badge: "Fitness & Wellness",
    subtitle: "El placer de brindar sin comprometer tu bienestar",
    imageSrc: "/lifestyle.webp",
    imageAlt: "Estilo de vida y momentos Le Petit Beret",
    paragraphs: [
      (
        <div key="lifestyle-content" className="space-y-6">
          {/* Fitness & Deporte */}
          <div className="space-y-2">
            <h4 className="font-roboto text-lg md:text-xl font-bold text-zinc-900 border-b border-zinc-200 pb-1">
              Fitness & Deporte:
            </h4>
            <ul className="space-y-2 pl-1">
              <li className="flex items-start gap-2">
                <span className="text-[#800020] font-bold mt-0.5">•</span>
                <span><strong className="text-zinc-900 font-semibold">Sin deshidratación:</strong> Al no contener alcohol, no inhibe la hormona antidiurética (vasopresina) ni altera el balance hídrico indispensable para la recuperación muscular.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#800020] font-bold mt-0.5">•</span>
                <span><strong className="text-zinc-900 font-semibold">Bajo aporte calórico:</strong> Contiene sustancialmente menos calorías y carbohidratos que un vino o cerveza tradicional (aprox. 17 a 25 kcal por copa).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#800020] font-bold mt-0.5">•</span>
                <span><strong className="text-zinc-900 font-semibold">Rendimiento e inflamación:</strong> Permite participar de eventos sociales sin interferir en la síntesis de proteínas, la calidad del sueño ni el metabolismo proteico del deportista.</span>
              </li>
            </ul>
          </div>

          {/* Wellness & Estilo de Vida Saludable */}
          <div className="space-y-2">
            <h4 className="font-roboto text-lg md:text-xl font-bold text-zinc-900 border-b border-zinc-200 pb-1">
              Wellness & Estilo de Vida Saludable:
            </h4>
            <ul className="space-y-2 pl-1">
              <li className="flex items-start gap-2">
                <span className="text-[#800020] font-bold mt-0.5">•</span>
                <span><strong className="text-zinc-900 font-semibold">Preservación de antioxidantes:</strong> Al elaborar la bebida a partir de mosto fresco e infusión de hollejos, conserva de forma natural los polifenoles y el resveratrol de la uva sin el impacto tóxico del etanol.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#800020] font-bold mt-0.5">•</span>
                <span><strong className="text-zinc-900 font-semibold">Ingredientes limpios (Clean Label):</strong> Agricultura orgánica/ecológica certificada, libre de sulfitos añadidos agresivos, pesticidas y aditivos sintéticos.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#800020] font-bold mt-0.5">•</span>
                <span><strong className="text-zinc-900 font-semibold">Salud mental y descanso:</strong> Encaja con la tendencia <em>sober curious</em> al eliminar la "resaca", la niebla mental y las alteraciones del sueño REM asociadas al consumo de alcohol.</span>
              </li>
            </ul>
          </div>

          {/* Comunidad Vegana */}
          <div className="space-y-2">
            <h4 className="font-roboto text-lg md:text-xl font-bold text-zinc-900 border-b border-zinc-200 pb-1">
              Comunidad Vegana:
            </h4>
            <ul className="space-y-2 pl-1">
              <li className="flex items-start gap-2">
                <span className="text-[#800020] font-bold mt-0.5">•</span>
                <span><strong className="text-zinc-900 font-semibold">Cero clarificantes animales:</strong> A diferencia de la enología tradicional —que suele usar albúmina de huevo, caseína (leche) o ictiocola (cola de pescado) para clarificar—, utiliza procesos mecánicos y de filtrado 100% vegetales.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#800020] font-bold mt-0.5">•</span>
                <span><strong className="text-zinc-900 font-semibold">Certificación oficial:</strong> Toda la cadena de producción garantiza que ningún insumo o derivado de origen animal entra en contacto con el producto, contando con la certificación <em>Vegan Friendly</em>.</span>
              </li>
            </ul>
          </div>

          {/* Conductores & Movilidad Segura */}
          <div className="space-y-2">
            <h4 className="font-roboto text-lg md:text-xl font-bold text-zinc-900 border-b border-zinc-200 pb-1">
              Conductores & Movilidad Segura:
            </h4>
            <ul className="space-y-2 pl-1">
              <li className="flex items-start gap-2">
                <span className="text-[#800020] font-bold mt-0.5">•</span>
                <span><strong className="text-zinc-900 font-semibold">Cero tasa de alcoholemia:</strong> Al garantizar un level de alcohol estrictamente de 0,0% (a diferencia de los desalcoholizados que pueden contener hasta 0,5%), cumple rigurosamente con normativas de "Alcohol Cero al Volante”. Permite disfrutar de una experiencia gastronómica o de maridaje refinada sin la necesidad de designar a un conductor o recurrir a refrescos azucarados.</span>
              </li>
            </ul>
          </div>

          {/* Nota adicional */}
          <div className="bg-zinc-100 p-4 rounded-md text-xs sm:text-sm text-zinc-700 italic border-l-2 border-[#800020]">
            <strong className="text-zinc-900 not-italic">Nota adicional:</strong> El proceso 0,0% sin fermentación le otorga también la certificación “Halal”, abriendo el consumo seguro a comunidades religiosas con restricciones estrictas sobre trazas de alcohol.
          </div>
        </div>
      ),
    ],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-amber-400 selection:text-black">
      {/* Componente Hero con video fullscreen 100vh */}
      <Hero />

      {/* Main Content: Vision Section, Concepts Accordion & Drinks */}
      <main className="divide-y divide-zinc-200">
        <VisionSection />
        <ConceptsAccordion concepts={conceptsData} />
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
