"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export interface IngredientItem {
  amountText: string;
  highlightText?: string;
}

export interface TastingNotes {
  visual: string;
  aromatic: string;
  taste: string;
}

export interface DrinkData {
  id: string;
  badge: string;
  badgeImage?: string;
  productTitle: string;
  productSubtitle?: string;
  productImage: string;
  productDescription: string;
  video?: string;

  // Opciones de Cóctel (para productos con receta)
  cocktailBadge?: string;
  cocktailTitle?: string;
  cocktailImage?: string;
  cocktailDescription?: string;
  ingredients?: IngredientItem[];
  materials?: string[];
  recipe?: string[];

  // Notas de Cata para Vinos / Espumantes
  tastingNotes?: TastingNotes;
}

export const DRINKS_DATA: DrinkData[] = [
  {
    id: "petit-aperol",
    badge: "Aperitivo 0.0% Alcohol",
    badgeImage: "/CocktailAperol/AperolShield.webp",
    productTitle: "Orange Spritz",
    productSubtitle: "Inspiré de la liqueur d'orange",
    productImage: "/CocktailAperol/petitAperol.webp",
    productDescription: "",
    video: "/CocktailAperol/Preparation aperol_1.mp4",
    cocktailBadge: "Cocktail",
    cocktailTitle: "Orange Spritz 0%",
    cocktailImage: "/CocktailAperol/Cocktail_Orange_Spritz.webp",
    cocktailDescription: "",
    ingredients: [
      { amountText: "90 ml de ", highlightText: "espumante Le Blanc" },
      { amountText: "60 ml de ", highlightText: "ORANGE Petit Beret" },
      { amountText: "30 ml de Tonic" },
      { amountText: "1 Rodaja de naranja" },
    ],
    materials: [
      "COPA GRANDE DE VINO",
      "MEDIDOR JIGGER DE COCKTAIL",
      "CUCHARA DE BAR",
      "PINZA PARA HIELO",
    ],
    recipe: [
      "En una copa grande de vino llena de cubos de hielo, vierte 60 ml de ORANGE Petit Beret y 90 ml de espumante Le Blanc.",
      "Completa con 30 ml de agua tónica bien fría, mezcla delicadamente con la cuchara para no romper las burbujas y decora con una rodaja de naranja.",
      "Sirve bien frío para un aperitivo refrescante.",
    ],
  },
  {
    id: "petit-gin",
    badge: "Espirituoso Botánico 0.0% Alcohol",
    badgeImage: "/CocktailGin/GinShield.webp",
    productTitle: "Botanique Tonic",
    productSubtitle: "Inspiré du Gin",
    productImage: "/CocktailGin/petitGin.webp",
    productDescription: "",
    cocktailBadge: "Cocktail",
    cocktailTitle: "Botanique Tonic 0%",
    cocktailImage: "/CocktailGin/Cocktail_Gin_Basil_Smash_0.webp",
    cocktailDescription: "",
    ingredients: [
      { amountText: "50 ml de ", highlightText: "ESSENCE BOTANIQUE" },
      { amountText: "150 ml de Tonic" },
      { amountText: "Twist de limón fresco (opcional)" },
    ],
    materials: [
      "VASO HIGHBALL / COPA DE COCKTAIL",
      "MEDIDOR JIGGER DE COCKTAIL",
      "CUCHARA DE BAR",
      "PINZA PARA HIELO",
    ],
    recipe: [
      "En un vaso o copa llena de abundante hielo fresco, vierte 50 ml de ESSENCE BOTANIQUE.",
      "Añade 150 ml de agua tónica bien fría y remueve suavemente con la cuchara de bar.",
      "Decora con un twist de limón fresco (opcional).",
    ],
  },
  {
    id: "le-blanc-espumante",
    badge: "Espumante 0.0% Alcohol",
    badgeImage: "/PetitShield.webp",
    productTitle: "Le Blanc Espumante",
    productSubtitle: "Brut 0.0% Vol",
    productImage: "/Leblanc/Leblank-Bottle.webp",
    productDescription:
      "Elegante, fresco y delicadamente efervescente, este blanco espumante encarna la fineza y el brillo natural de la uva. Elaborado sin fermentación, revela una hermosa expresión floral y frutal, impulsada por una burbuja fina y persistente.",
    tastingNotes: {
      visual:
        "Un color oro claro con reflejos plateados, límpido y brillante. La efervescencia es viva, animada por finas burbujas que danzan en la copa con precisión.",
      aromatic:
        "Una nariz directa y expresiva, marcada por aromas a manzana verde, pera fresca y ralladura de limón. Una paleta aromática nítida y refrescante.",
      taste:
        "El ataque es vivo y enérgico, impulsado por una gran tensión. La fruta se expresa con claridad, sostenida por una efervescencia elegante. El final es tenso, cítrico y casi salino. Un espumante de carácter, franco, seco y profundamente refrescante.",
    },
  },
];

function DrinkSectionContent({ drink }: { drink: DrinkData }) {
  // Pestaña para la sección del Cóctel
  const [cocktailTab, setCocktailTab] = useState<"ingredients" | "materials" | "recipe">("ingredients");
  const scrollRef = useRef<HTMLDivElement>(null);

  const hasCocktail = Boolean(drink.cocktailImage);

  const tabs: { id: "ingredients" | "materials" | "recipe"; label: string }[] = [
    { id: "ingredients", label: "Ingredientes" },
    { id: "materials", label: "Materiales" },
    { id: "recipe", label: "Receta" },
  ];

  const handleTabClick = (tabId: "ingredients" | "materials" | "recipe", index: number) => {
    setCocktailTab(tabId);
    if (scrollRef.current) {
      const containerWidth = scrollRef.current.clientWidth;
      scrollRef.current.scrollTo({
        left: index * containerWidth,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    if (clientWidth === 0) return;
    const index = Math.round(scrollLeft / clientWidth);
    const tabList: ("ingredients" | "materials" | "recipe")[] = ["ingredients", "materials", "recipe"];
    if (tabList[index] && tabList[index] !== cocktailTab) {
      setCocktailTab(tabList[index]);
    }
  };

  return (
    <div className="w-full bg-white text-zinc-900 border-t border-zinc-200">

      {/* 1. SECCIÓN PRINCIPAL DEL PRODUCTO */}
      <div className="w-full py-12 md:py-16 flex items-center justify-center border-b border-zinc-200">
        <div className="w-full px-6 sm:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-16">

          {/* Botella */}
          <div className="w-full md:w-1/2 h-[55vh] sm:h-[70vh] lg:h-[80vh] relative flex justify-center items-center">
            <Image
              src={drink.productImage}
              alt={drink.productTitle}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain"
              priority
            />
          </div>

          {/* Información del Producto */}
          <div className="w-full md:w-1/2 space-y-6 text-left max-w-2xl px-0 flex flex-col items-start">

            <span className="inline-block text-xs font-semibold tracking-widest text-zinc-500 uppercase font-roboto border-b border-zinc-300 pb-1 text-left">
              {drink.badge}
            </span>

            <div className="space-y-2 text-left w-full">
              <h3 className="font-oswald text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-900 uppercase leading-none text-left">
                {drink.productTitle}
              </h3>
              {drink.productSubtitle && (
                <p className="font-oswald text-lg sm:text-xl lg:text-2xl font-semibold uppercase text-zinc-400 tracking-wider text-left">
                  {drink.productSubtitle}
                </p>
              )}
            </div>

            {drink.productDescription && (
              <p className="font-roboto text-zinc-700 text-base sm:text-lg lg:text-xl leading-relaxed font-light text-left">
                {drink.productDescription}
              </p>
            )}

            {/* NOTAS DE CATA (Solo para productos como Le Blanc Espumante) */}
            {drink.tastingNotes && (
              <div className="w-full pt-6 border-t border-zinc-200 space-y-4">
                <span className="font-roboto text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Notas de Cata
                </span>
                <div className="space-y-4 text-left font-roboto">
                  <div>
                    <h4 className="font-oswald text-base font-bold text-zinc-900 uppercase">Firma Visual</h4>
                    <p className="text-zinc-700 text-sm leading-relaxed">{drink.tastingNotes.visual}</p>
                  </div>
                  <div className="border-t border-zinc-100 pt-2">
                    <h4 className="font-oswald text-base font-bold text-zinc-900 uppercase">Impresión Aromática</h4>
                    <p className="text-zinc-700 text-sm leading-relaxed">{drink.tastingNotes.aromatic}</p>
                  </div>
                  <div className="border-t border-zinc-100 pt-2">
                    <h4 className="font-oswald text-base font-bold text-zinc-900 uppercase">Expresión Gustativa</h4>
                    <p className="text-zinc-700 text-sm leading-relaxed">{drink.tastingNotes.taste}</p>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>
      </div>

      {/* 2. SECCIÓN CÓCTEL Y RECETA */}
      {hasCocktail && drink.cocktailImage && (
        <div className="w-full border-b border-zinc-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[80vh]">

            {/* Foto del Cóctel */}
            <div className="lg:col-span-6 relative min-h-[450px] lg:min-h-[80vh] flex items-center justify-start bg-zinc-950 p-8 sm:p-12 md:p-16 text-left">
              <Image
                src={drink.cocktailImage}
                alt={drink.cocktailTitle || drink.productTitle}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover opacity-80"
              />

              <div className="relative z-10 max-w-lg space-y-4 text-white flex flex-col items-start text-left">
                {drink.cocktailBadge && (
                  <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest text-white bg-white/20 uppercase font-roboto text-left">
                    {drink.cocktailBadge}
                  </span>
                )}

                {drink.cocktailTitle && (
                  <h2 className="oswald-custom uppercase text-white tracking-widest text-left">
                    {drink.cocktailTitle}
                  </h2>
                )}

                {drink.cocktailDescription && (
                  <p className="font-roboto text-white/90 text-sm sm:text-base lg:text-lg font-light leading-relaxed max-w-md text-left">
                    {drink.cocktailDescription}
                  </p>
                )}
              </div>
            </div>

            {/* Columna Derecha: Video en la parte superior + Pestañas e Ingredientes/Materiales/Receta */}
            <div className="lg:col-span-6 bg-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-zinc-200 text-left overflow-hidden p-0">

              {/* Video de preparación (sin fondo negro ni padding, directamente arriba de las pestañas) */}
              {drink.video && (
                <div className="w-full relative bg-transparent p-0 m-0 border-b border-zinc-200">
                  <video
                    src={drink.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto object-cover p-0 m-0 block"
                  />
                </div>
              )}

              <div className="p-6 sm:p-10 lg:p-12 flex flex-col justify-center flex-1">
                {/* Navegación de pestañas */}
                <nav className="flex items-center justify-start border-b border-zinc-200 gap-6 sm:gap-8 pb-3 mb-8 overflow-x-auto scrollbar-none">
                  {tabs.map((tab, idx) => (
                    <button
                      key={tab.id}
                      onClick={() => handleTabClick(tab.id, idx)}
                      className={`font-roboto text-sm sm:text-base uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${cocktailTab === tab.id
                          ? "font-bold text-zinc-900 border-b-2 border-zinc-900 -mb-[13px] pb-3"
                          : "text-zinc-400 hover:text-zinc-700"
                        }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </nav>

                {/* Contenedor Horizontal deslizable por Touch / Swipe */}
                <div
                  ref={scrollRef}
                  onScroll={handleScroll}
                  className="w-full flex overflow-x-auto snap-x snap-mandatory scrollbar-none touch-pan-x space-x-0"
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                  {/* SLIDE 1: INGREDIENTES */}
                  <div className="w-full min-w-full snap-start shrink-0 pr-4 sm:pr-6 space-y-6 text-left">
                    <h3 className="font-oswald text-3xl sm:text-4xl font-bold text-zinc-900 uppercase text-left">
                      Ingredientes
                    </h3>
                    {drink.ingredients ? (
                      <ul className="space-y-4 font-roboto text-base sm:text-lg text-zinc-800 text-left">
                        {drink.ingredients.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-left">
                            <span className="w-1.5 h-1.5 rounded-full bg-zinc-900 shrink-0"></span>
                            <span>
                              {item.amountText}
                              {item.highlightText && (
                                <a
                                  href="#"
                                  className="font-oswald font-bold uppercase underline underline-offset-4 text-zinc-900 hover:text-zinc-700"
                                >
                                  {item.highlightText}
                                </a>
                              )}
                            </span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-zinc-500 italic">No hay ingredientes registrados.</p>
                    )}
                  </div>

                  {/* SLIDE 2: MATERIALES */}
                  <div className="w-full min-w-full snap-start shrink-0 pr-4 sm:pr-6 space-y-6 text-left">
                    <h3 className="font-oswald text-3xl sm:text-4xl font-bold text-zinc-900 uppercase text-left">
                      Materiales
                    </h3>
                    {drink.materials ? (
                      <ul className="space-y-4 font-roboto text-base sm:text-lg text-zinc-800 text-left">
                        {drink.materials.map((mat, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-left">
                            <span className="w-1.5 h-1.5 rounded-full bg-zinc-900 shrink-0"></span>
                            <span className="font-oswald font-bold uppercase tracking-wider text-zinc-900 text-left">
                              {mat}
                            </span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-zinc-500 italic">No hay materiales registrados.</p>
                    )}
                  </div>

                  {/* SLIDE 3: RECETA */}
                  <div className="w-full min-w-full snap-start shrink-0 pr-4 sm:pr-6 space-y-6 text-left">
                    <h3 className="font-oswald text-3xl sm:text-4xl font-bold text-zinc-900 uppercase text-left">
                      Receta
                    </h3>
                    {drink.recipe ? (
                      <div className="space-y-4 font-roboto text-base sm:text-lg text-zinc-700 leading-relaxed font-light text-left">
                        {drink.recipe.map((step, idx) => (
                          <p key={idx} className="text-left">{step}</p>
                        ))}
                      </div>
                    ) : (
                      <p className="text-zinc-500 italic">No hay receta disponible.</p>
                    )}
                  </div>

                </div>

                {/* Indicadores visuales de puntos (Dots) para móviles */}
                <div className="flex items-center justify-center gap-2 mt-8 lg:hidden">
                  {tabs.map((tab, idx) => (
                    <button
                      key={tab.id}
                      onClick={() => handleTabClick(tab.id, idx)}
                      aria-label={`Ver ${tab.label}`}
                      className={`h-2 rounded-full transition-all duration-300 ${cocktailTab === tab.id ? "w-6 bg-zinc-900" : "w-2 bg-zinc-300"
                        }`}
                    />
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}

export default function Drinks() {
  const [openDrinkId, setOpenDrinkId] = useState<string | null>("petit-aperol");

  const handleShieldClick = (id: string) => {
    setOpenDrinkId((prev) => (prev === id ? null : id));
  };

  const activeDrink = DRINKS_DATA.find((drink) => drink.id === openDrinkId);

  return (
    <section className="w-full bg-white text-zinc-900 overflow-hidden py-12 md:py-16">

      {/* SECTOR DE GATILLOS: LOS 3 ESCUDOS GRANDES LADO A LADO SIN TÍTULOS */}
      <div className="w-full max-w-5xl mx-auto px-6 flex items-center justify-center gap-8 sm:gap-16 md:gap-20 lg:gap-28 mb-10 sm:mb-16">
        {DRINKS_DATA.map((drink) => {
          const isActive = openDrinkId === drink.id;
          return (
            <button
              key={drink.id}
              onClick={() => handleShieldClick(drink.id)}
              aria-label={`Seleccionar ${drink.productTitle}`}
              className={`relative group cursor-pointer transition-all duration-300 transform flex flex-col items-center focus:outline-none ${isActive
                  ? "scale-110 opacity-100"
                  : "opacity-40 hover:opacity-90 hover:scale-105"
                }`}
            >
              <div className="relative w-28 h-28 sm:w-44 sm:h-44 md:w-56 md:h-56 lg:w-64 lg:h-64">
                <Image
                  src={drink.badgeImage!}
                  alt={`${drink.productTitle} Shield`}
                  fill
                  sizes="(max-width: 640px) 112px, (max-width: 1024px) 224px, 256px"
                  className="object-contain filter drop-shadow-md group-hover:drop-shadow-xl transition-all"
                  priority
                />
              </div>

              {/* Indicador visual de selección activo (Línea Burdeos) */}
              <div
                className={`h-1.5 rounded-full bg-[#800020] transition-all duration-300 mt-3 ${isActive ? "w-12 sm:w-20 opacity-100" : "w-0 opacity-0 group-hover:w-8 group-hover:opacity-40"
                  }`}
              />
            </button>
          );
        })}
      </div>

      {/* CONTENIDO DESPLEGABLE DE LA BEBIDA SELECCIONADA */}
      <AnimatePresence mode="wait">
        {activeDrink && (
          <motion.div
            key={activeDrink.id}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <DrinkSectionContent drink={activeDrink} />
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
