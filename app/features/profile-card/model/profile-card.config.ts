import type { ContainerSizeOption } from "../../shared/ui/ContainerSizeSelector";
import type { CardSize } from "./profile-card.types";

export const CARD_WIDTHS = {
  narrow: "max-w-[320px]",
  medium: "max-w-[480px]",
  large: "max-w-[640px]",
} satisfies Record<CardSize, string>;

export const CARD_SIZE_OPTIONS = [
  {
    value: "narrow",
    label: "Narrow",
    description: "Width 320px",
  },
  {
    value: "medium",
    label: "Medium",
    description: "Width 480px",
  },
  {
    value: "large",
    label: "Large",
    description: "Width 640px",
  },
] satisfies readonly ContainerSizeOption<CardSize>[];
