"use client";

import { useState } from "react";
import ContainerSizeSelector from "../../shared/ui/ContainerSizeSelector";
import { profileCardDemoContent } from "../data/profile-card-demo.data";
import { CARD_SIZE_OPTIONS, CARD_WIDTHS } from "../model/profile-card.config";
import type { CardSize } from "../model/profile-card.types";
import ProfileCard from "./ProfileCard";

const ProfileCardDemo = () => {
  const [size, setSize] = useState<CardSize>("narrow");

  return (
    <section
      aria-labelledby="profile-card-demo-title"
      className="flex w-full flex-col items-center gap-8 px-4"
    >
      <h2 id="profile-card-demo-title" className="sr-only">
        Adaptive profile card container query demo
      </h2>

      <div
        className={`
          mb-5 w-full
          motion-safe:transition-[max-width]
          motion-safe:duration-300
          motion-safe:ease-in-out
          ${CARD_WIDTHS[size]}
        `}
      >
        <ProfileCard
          id="adaptive-profile-card-preview"
          {...profileCardDemoContent}
        />
      </div>

      <ContainerSizeSelector
        value={size}
        options={CARD_SIZE_OPTIONS}
        onChange={setSize}
        name="profile-card-preview-size"
      />

      <div className="space-y-3 text-center text-sm font-light lg:text-xl">
        <p>
          The card changes layout through CSS Container Queries, not viewport
          breakpoints.
        </p>
      </div>

      <p className="sr-only" aria-live="polite">
        Profile card preview width changed to {size}.
      </p>
    </section>
  );
};

export default ProfileCardDemo;
