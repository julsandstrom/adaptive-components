"use client";

import { useState } from "react";
import AdaptiveCard from "./AdaptiveCard";
import SizeSelection from "./SizeSelection";

const sizes = {
  narrow: "w-full max-w-[320px]",
  medium: "w-full max-w-[480px]",
  large: "w-full max-w-[640px]",
};

export type CardSize = keyof typeof sizes;

const AdaptiveCardDemo = () => {
  const [size, setSize] = useState<CardSize>("narrow");

  return (
    <section
      aria-labelledby="adaptive-card-title"
      className="flex w-full flex-col items-center gap-8 px-4"
    >
      <h2 id="adaptive-card-title" className="sr-only">
        Adaptive card container query demo
      </h2>
      <div
        className={`
    transition-all duration-300 ease-in-out
   
    ${sizes[size]}
  `}
      >
        <AdaptiveCard />
      </div>
      <SizeSelection size={size} onSizeChange={setSize} />{" "}
    </section>
  );
};

export default AdaptiveCardDemo;
