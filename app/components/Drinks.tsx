"use client";

import { useState } from "react";
import Image from "next/image";

export interface IngredientItem {
  amountText: string;
  highlightText?: string;
}

export interface DrinkData {
  id: string;
  badge: string;
  productTitle: string;
  productImage: string;
  productDescription: string;
  cocktailBadge: string;
  cocktailTitle: string;
  cocktailImage: string;
  cocktailDescription: string;
  ingredients: IngredientItem[];
  materials: string[];
  recipe: string[];
}

export const DRINKS_DATA: DrinkData[] = [
  {
    id: "petit-aperol",
    badge: "Aperitivo 0.0% Alcohol",
    productTitle: "Petit Aperol",
    productImage: "/CocktailAperol/petitAperol.webp",
    productDescription:
      "Fresca, aromática y profundamente vegetal, nuestra esencia se inspira en la riqueza de los aperitivos tradicionales sin nada de alcohol. Elaborada sin fermentación, revela una compleja paleta de plantas, hierbas y cítricos. Una alternativa elegante y sensorial, pensada para los amantes de la mixología y la libertad.",
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
    productTitle: "Petit Gin",
    productImage: "/CocktailGin/petitGin.webp",
    productDescription:
      "Ultra fresco e intensamente aromático, nuestro Petit Gin rinde homenaje a las grandes ginebras botánicas sin contener una sola gota de alcohol. Revela vibrantes notas de enebro, cítricos frescos y hierbas aromáticas finamente seleccionadas para elevar la experiencia de cocktail contemporánea.",
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
];

function DrinkSection({ drink }: { drink: DrinkData }) {
  const [activeTab, setActiveTab] = useState<"ingredients" | "materials" | "recipe">("ingredients");

  return (
    <div className="w-full border-b border-zinc-200">
      
      {/* SECCIÓN PRODUCTO (100vw en móvil) */}
      <div className="w-full min-h-screen bg-white text-zinc-900 border-b border-zinc-200 py-12 md:py-16 flex items-center justify-center">
        <div className="w-full px-0 sm:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-16">
          
          {/* Imagen de la Botella (100vw de borde a borde en móvil) */}
          <div className="w-full md:w-1/2 h-[65vh] sm:h-[80vh] lg:h-[90vh] relative flex justify-center items-center">
            <Image
              src={drink.productImage}
              alt={drink.productTitle}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain"
              priority
            />
          </div>

          {/* Descripción del Producto */}
          <div className="w-full md:w-1/2 space-y-6 text-left max-w-2xl px-6 md:px-0">
            <span className="inline-block text-xs font-semibold tracking-widest text-zinc-500 uppercase font-roboto border-b border-zinc-300 pb-1">
              {drink.badge}
            </span>
            
            <h2 className="font-oswald text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-zinc-900 uppercase leading-none">
              {drink.productTitle}
            </h2>
            
            <p className="font-roboto text-zinc-700 text-base sm:text-xl lg:text-2xl leading-relaxed font-light">
              {drink.productDescription}
            </p>
          </div>

        </div>
      </div>

      {/* SECCIÓN CÓCTEL + RECETA (Estructura idéntica al HTML lepetitberet.com) */}
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen">
          
          {/* COLUMNA IZQUIERDA (50vw): Foto del Cóctel + Texto Centrado en Blanco */}
          <div className="lg:col-span-6 relative min-h-[500px] lg:min-h-screen flex items-center justify-center bg-zinc-950 p-8 sm:p-12 text-center">
            <Image
              src={drink.cocktailImage}
              alt={drink.cocktailTitle}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover opacity-80"
            />
            
            <div className="relative z-10 max-w-lg mx-auto space-y-4 text-white flex flex-col items-center justify-center">
              <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest text-white bg-white/20 uppercase font-roboto">
                {drink.cocktailBadge}
              </span>
              
              <h2 className="oswald-custom uppercase text-white tracking-widest text-center">
                {drink.cocktailTitle}
              </h2>
              
              <p className="font-roboto text-white/90 text-sm sm:text-base lg:text-lg font-light leading-relaxed max-w-md text-center">
                {drink.cocktailDescription}
              </p>
            </div>
          </div>

          {/* COLUMNA DERECHA (50vw): Pestañas Horizontales e Información */}
          <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 bg-white flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-zinc-200">
            
            {/* Pestañas (timeline__nav) */}
            <nav className="flex items-center justify-start border-b border-zinc-200 gap-8 pb-3 mb-8">
              <button
                onClick={() => setActiveTab("ingredients")}
                className={`font-roboto text-sm sm:text-base uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === "ingredients"
                    ? "font-bold text-zinc-900 border-b-2 border-zinc-900 -mb-[13px] pb-3"
                    : "text-zinc-400 hover:text-zinc-700"
                }`}
              >
                Ingredientes
              </button>
              <button
                onClick={() => setActiveTab("materials")}
                className={`font-roboto text-sm sm:text-base uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === "materials"
                    ? "font-bold text-zinc-900 border-b-2 border-zinc-900 -mb-[13px] pb-3"
                    : "text-zinc-400 hover:text-zinc-700"
                }`}
              >
                Materiales
              </button>
              <button
                onClick={() => setActiveTab("recipe")}
                className={`font-roboto text-sm sm:text-base uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === "recipe"
                    ? "font-bold text-zinc-900 border-b-2 border-zinc-900 -mb-[13px] pb-3"
                    : "text-zinc-400 hover:text-zinc-700"
                }`}
              >
                Receta
              </button>
            </nav>

            {/* VISTA 1: INGREDIENTES */}
            {activeTab === "ingredients" && (
              <div className="space-y-6">
                <h3 className="font-oswald text-3xl sm:text-4xl font-bold text-zinc-900 uppercase">
                  Ingredientes
                </h3>
                <ul className="space-y-4 font-roboto text-base sm:text-lg text-zinc-800">
                  {drink.ingredients.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
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
            {activeTab === "materials" && (
              <div className="space-y-6">
                <h3 className="font-oswald text-3xl sm:text-4xl font-bold text-zinc-900 uppercase">
                  Materiales
                </h3>
                <ul className="space-y-4 font-roboto text-base sm:text-lg text-zinc-800">
                  {drink.materials.map((mat, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-900 shrink-0"></span>
                      <span className="font-oswald font-bold uppercase tracking-wider text-zinc-900">
                        {mat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* VISTA 3: RECETA */}
            {activeTab === "recipe" && (
              <div className="space-y-6">
                <h3 className="font-oswald text-3xl sm:text-4xl font-bold text-zinc-900 uppercase">
                  Receta
                </h3>
                <div className="space-y-4 font-roboto text-base sm:text-lg text-zinc-700 leading-relaxed font-light">
                  {drink.recipe.map((step, idx) => (
                    <p key={idx}>{step}</p>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>
      </div>

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
