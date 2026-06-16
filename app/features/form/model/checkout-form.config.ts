import type { ContainerSizeOption } from "../../shared/ui/ContainerSizeSelector";
import type { CheckoutFormSize } from "./checkout-form.types";

export const CHECKOUT_FORM_WIDTHS = {
  narrow: "max-w-[360px]",
  medium: "max-w-[560px]",
  large: "max-w-[820px]",
} satisfies Record<CheckoutFormSize, string>;

export const CHECKOUT_FORM_SIZE_OPTIONS = [
  {
    value: "narrow",
    label: "Narrow",
    description: "360px",
  },
  {
    value: "medium",
    label: "Medium",
    description: "560px",
  },
  {
    value: "large",
    label: "Large",
    description: "820px",
  },
] satisfies readonly ContainerSizeOption<CheckoutFormSize>[];
