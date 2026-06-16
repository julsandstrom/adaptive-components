"use client";

import { useState } from "react";
import AdaptiveCard from "./ProfileCard";
import CardSizeSelector from "./CardSizeSelector";
import { profileCardDemoContent } from "../data/profile-card-demo.data";

const sizes = {
  narrow: "w-full max-w-[320px]",
  medium: "w-full max-w-[480px]",
  large: "w-full max-w-[640px]",
};

export type CardSize = keyof typeof sizes;

const ProfileCardDemo = () => {
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
    transition-all duration-300 ease-in-out mb-5
   
    ${sizes[size]}
  `}
      >
        <AdaptiveCard id="adaptive-card-preview" {...profileCardDemoContent} />
      </div>
      <CardSizeSelector value={size} onChange={setSize} />{" "}
    </section>
  );
};

export default ProfileCardDemo;
