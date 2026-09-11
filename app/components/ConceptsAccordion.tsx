"use client";

import { useState } from "react";
import ConceptSection, { ConceptSectionProps } from "./ConceptSection";

interface ConceptsAccordionProps {
  concepts: ConceptSectionProps[];
}

export default function ConceptsAccordion({ concepts }: ConceptsAccordionProps) {
  // Estado para controlar cuál sección está abierta (por defecto la primera "ORIGEN" o ninguna)
  const [openTitle, setOpenTitle] = useState<string | null>("ORIGEN");

  const handleToggle = (title: string) => {
    setOpenTitle((prev) => (prev === title ? null : title));
  };

  return (
    <div className="w-full divide-y divide-zinc-200 bg-white">
      {concepts.map((concept) => (
        <ConceptSection
          key={concept.title}
          {...concept}
          isOpen={openTitle === concept.title}
          onToggle={() => handleToggle(concept.title)}
        />
      ))}
    </div>
  );
}
