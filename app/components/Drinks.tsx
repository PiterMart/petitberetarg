"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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
    productDescription:
      "Fresca, aromática y profundamente vegetal, nuestra esencia se inspira en la riqueza de los aperitivos tradicionales sin nada de alcohol. Elaborada sin fermentación, revela una compleja paleta de plantas, hierbas y cítricos. Una alternativa elegante y sensorial, pensada para los amantes de la mixología y la libertad.",
    video: "/CocktailAperol/Preparation aperol.mp4",
    cocktailBadge: "Cocktail",
    cocktailTitle: "Orange Spritz 0%",
    cocktailImage: "/CocktailAperol/Cocktail_Orange_Spritz.webp",
    cocktailDescription:
      "Italia en una copa, sin la menor gota de alcohol. Con sus notas de naranja amarga, cítricos zestados y una fineza amarga perfectamente equilibrada, nuestro Orange Spritz sin alcohol evoca los aperitivos soleados en terraza. Refrescante, elegante e irresistiblemente mediterráneo: este cóctel espumante es una invitación a celebrar... en toda libertad.",
    ingredients: [
      { amountText: "90 ml de ", highlightText: "GRAND DE GRAND PETIT BERET" },
      { amountText: "60 ml de ", highlightText: "ORANGE SPRITZ PETIT BERET" },
      { amountText: "30 ml de Tonic" },
      { amountText: "1 Rodaja de naranja para decorar" },
    ],
    materials: [
      "UNA COPA GRANDE DE VINO",
      "MEDIDOR JIGGER DE COCKTAIL",
      "UNA CUCHARA DE BAR",
      "PINZA PARA HIELO",
    ],
    recipe: [
      "En una copa grande de vino llena de cubos de hielo, vierte 60 ml de Orange Spritz, luego añade 90 ml de Le Grand de Grand.",
      "Completa con 30 ml de agua tónica bien fría, mezcla delicadamente con la cuchara para no romper las burbujas y decora con una rodaja de naranja.",
      "Este cóctel sin alcohol está listo para ser disfrutado, espumante y refrescante, perfecto para un aperitivo festivo.",
    ],
  },
  {
    id: "petit-gin",
    badge: "Espirituoso Botánico 0.0% Alcohol",
    badgeImage: "/CocktailGin/GinShield.webp",
    productTitle: "Essence Botanique",
    productSubtitle: "Inspiré du Gin",
    productImage: "/CocktailGin/petitGin.webp",
    productDescription:
      "Ultra fresco e intensamente aromático, nuestro Essence Botanique rinde homenaje a las grandes ginebras botánicas sin contener una sola gota de alcohol. Revela vibrantes notas de enebro, cítricos frescos y hierbas aromáticas finamente seleccionadas para elevar la experiencia de cocktail contemporánea.",
    cocktailBadge: "Cocktail",
    cocktailTitle: "Gin Basil Smash 0%",
    cocktailImage: "/CocktailGin/Cocktail_Gin_Basil_Smash_0.webp",
    cocktailDescription:
      "Ultra fresco e intensamente aromático, el Gin Basil Smash 0% es un cóctel vibrante y vegetal. La albahaca fresca machacada libera elegantes notas herbales, realzadas por un toque de limón que aporta energía y frescura. Un cóctel moderno, tónico y resueltamente estimulante.",
    ingredients: [
      { amountText: "50 ml de ", highlightText: "ESSENCE BOTANIQUE PETIT BÉRET" },
      { amountText: "6 a 8 hojas de albahaca fresca" },
      { amountText: "20 ml de jugo de limón fresco" },
      { amountText: "10 ml de jarabe de agave (opcional)" },
      { amountText: "Cubos de hielo" },
    ],
    materials: [
      "UN VASO HIGHBALL / COPA DE COCKTAIL",
      "MORTERO O MAZO DE COCKTAIL",
      "COCTELERA (SHAKER)",
      "COLADOR DE COCKTAIL",
    ],
    recipe: [
      "En una coctelera, machaca delicadamente de 6 a 8 hojas de albahaca fresca junto con el jugo de limón fresco.",
      "Añade 50 ml de Essence Botanique Petit Béret (Petit Gin) y 10 ml de jarabe de agave con abundante hielo.",
      "Agita enérgicamente en la coctelera y filtra en un vaso lleno de hielo fresco. Decora con hojas de albahaca.",
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

function DrinkSection({ drink }: { drink: DrinkData }) {
  // Pestaña para la sección del Cóctel
  const [cocktailTab, setCocktailTab] = useState<"ingredients" | "materials" | "recipe">("ingredients");

  const hasCocktail = Boolean(drink.cocktailImage);

  return (
    <div className="w-full border-b border-zinc-200">
      
      {/* 1. SECCIÓN PRINCIPAL DEL PRODUCTO */}
      <div className="w-full min-h-screen bg-white text-zinc-900 border-b border-zinc-200 py-12 md:py-16 flex items-center justify-center">
        <div className="w-full px-0 sm:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-16">
          
          {/* Botella con animación suave de entrada */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="w-full md:w-1/2 h-[65vh] sm:h-[80vh] lg:h-[90vh] relative flex justify-center items-center"
          >
            <Image
              src={drink.productImage}
              alt={drink.productTitle}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain"
              priority
            />
          </motion.div>

          {/* Información del Producto con animación suave */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="w-full md:w-1/2 space-y-6 text-left max-w-2xl px-6 md:px-0 flex flex-col items-start"
          >
            
            {/* Escudo del Producto */}
            {drink.badgeImage && (
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 -mb-2">
                <Image
                  src={drink.badgeImage}
                  alt={`${drink.productTitle} Shield Logo`}
                  fill
                  sizes="(max-width: 768px) 160px, 200px"
                  className="object-contain object-left"
                />
              </div>
            )}

            <span className="inline-block text-xs font-semibold tracking-widest text-zinc-500 uppercase font-roboto border-b border-zinc-300 pb-1 text-left">
              {drink.badge}
            </span>
            
            <div className="space-y-2 text-left w-full">
              <h2 className="font-oswald text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-zinc-900 uppercase leading-none text-left">
                {drink.productTitle}
              </h2>
              {drink.productSubtitle && (
                <p className="font-oswald text-lg sm:text-2xl lg:text-3xl font-semibold uppercase text-zinc-400 tracking-wider text-left">
                  {drink.productSubtitle}
                </p>
              )}
            </div>
            
            <p className="font-roboto text-zinc-700 text-base sm:text-xl lg:text-2xl leading-relaxed font-light text-left">
              {drink.productDescription}
            </p>

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

          </motion.div>

        </div>
      </div>

      {/* 1.5 SECCIÓN DE VIDEO DE PREPARACIÓN DE CÓCTEL */}
      {drink.video && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="w-full bg-black py-12 md:py-20 border-b border-zinc-200 flex flex-col items-center justify-center"
        >
          <div className="max-w-5xl w-full px-4 sm:px-6">
            <video
              src={drink.video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto max-h-[75vh] object-cover shadow-2xl rounded-sm"
            />
          </div>
        </motion.div>
      )}

      {/* 2. SECCIÓN CÓCTEL Y RECETA */}
      {hasCocktail && drink.cocktailImage && (
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen">
            
            {/* Foto del Cóctel con entrada parallax/fade */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 relative min-h-[500px] lg:min-h-screen flex items-center justify-start bg-zinc-950 p-8 sm:p-12 md:p-16 text-left"
            >
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
            </motion.div>

            {/* Pestañas del Cóctel */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-6 p-8 sm:p-12 lg:p-16 bg-white flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-zinc-200 text-left"
            >
              
              <nav className="flex items-center justify-start border-b border-zinc-200 gap-8 pb-3 mb-8">
                <button
                  onClick={() => setCocktailTab("ingredients")}
                  className={`font-roboto text-sm sm:text-base uppercase tracking-wider transition-all cursor-pointer ${
                    cocktailTab === "ingredients"
                      ? "font-bold text-zinc-900 border-b-2 border-zinc-900 -mb-[13px] pb-3"
                      : "text-zinc-400 hover:text-zinc-700"
                  }`}
                >
                  Ingredientes
                </button>
                <button
                  onClick={() => setCocktailTab("materials")}
                  className={`font-roboto text-sm sm:text-base uppercase tracking-wider transition-all cursor-pointer ${
                    cocktailTab === "materials"
                      ? "font-bold text-zinc-900 border-b-2 border-zinc-900 -mb-[13px] pb-3"
                      : "text-zinc-400 hover:text-zinc-700"
                  }`}
                >
                  Materiales
                </button>
                <button
                  onClick={() => setCocktailTab("recipe")}
                  className={`font-roboto text-sm sm:text-base uppercase tracking-wider transition-all cursor-pointer ${
                    cocktailTab === "recipe"
                      ? "font-bold text-zinc-900 border-b-2 border-zinc-900 -mb-[13px] pb-3"
                      : "text-zinc-400 hover:text-zinc-700"
                  }`}
                >
                  Receta
                </button>
              </nav>

              {/* VISTA 1: INGREDIENTES CÓCTEL */}
              {cocktailTab === "ingredients" && drink.ingredients && (
                <div className="space-y-6 text-left">
                  <h3 className="font-oswald text-3xl sm:text-4xl font-bold text-zinc-900 uppercase text-left">
                    Ingredientes
                  </h3>
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
                </div>
              )}

              {/* VISTA 2: MATERIALES */}
              {cocktailTab === "materials" && drink.materials && (
                <div className="space-y-6 text-left">
                  <h3 className="font-oswald text-3xl sm:text-4xl font-bold text-zinc-900 uppercase text-left">
                    Materiales
                  </h3>
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
                </div>
              )}

              {/* VISTA 3: RECETA */}
              {cocktailTab === "recipe" && drink.recipe && (
                <div className="space-y-6 text-left">
                  <h3 className="font-oswald text-3xl sm:text-4xl font-bold text-zinc-900 uppercase text-left">
                    Receta
                  </h3>
                  <div className="space-y-4 font-roboto text-base sm:text-lg text-zinc-700 leading-relaxed font-light text-left">
                    {drink.recipe.map((step, idx) => (
                      <p key={idx} className="text-left">{step}</p>
                    ))}
                  </div>
                </div>
              )}

            </motion.div>

          </div>
        </div>
      )}

    </div>
  );
}

export default function Drinks() {
  return (
    <section className="w-full bg-white text-zinc-900 overflow-hidden">
      {DRINKS_DATA.map((drink) => (
        <DrinkSection key={drink.id} drink={drink} />
      ))}
    </section>
  );
}
