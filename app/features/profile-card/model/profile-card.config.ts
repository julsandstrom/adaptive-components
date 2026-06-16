import { CardSize } from "./profile-card.types";

export const CARD_SIZES = {
  narrow: "w-full max-w-[320px]",
  medium: "w-full max-w-[480px]",
  large: "w-full max-w-[640px]",
} satisfies Record<CardSize, string>;

export const CARD_SIZE_OPTIONS: ReadonlyArray<{
  value: CardSize;
  label: string;
}> = [
  {
    value: "narrow",
    label: "Narrow",
  },
  {
    value: "medium",
    label: "Medium",
  },
  {
    value: "large",
    label: "Large",
  },
];
