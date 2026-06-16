"use client";

import { useState } from "react";
import ContainerSizeSelector from "../../shared/ui/ContainerSizeSelector";
import {
  CHECKOUT_FORM_SIZE_OPTIONS,
  CHECKOUT_FORM_WIDTHS,
} from "../model/checkout-form.config";
import type { CheckoutFormSize } from "../model/checkout-form.types";
import AdaptiveCheckoutForm from "./AdaptiveCheckoutForm";

const CheckoutFormDemo = () => {
  const [size, setSize] = useState<CheckoutFormSize>("narrow");

  const activeOption = CHECKOUT_FORM_SIZE_OPTIONS.find(
    (option) => option.value === size,
  );

  return (
    <section
      aria-labelledby="checkout-form-demo-title"
      className="flex w-full flex-col items-center gap-10"
    >
      <h1 id="checkout-form-demo-title" className="sr-only">
        Adaptive checkout form container query demo
      </h1>

      <div
        className={`
          relative w-full
          rounded-2xl
          border border-black/10
          bg-white/20
          p-4 shadow-[0_1px_3px_rgb(0_0_0/0.04)]
          backdrop-blur-sm

          motion-safe:transition-[max-width]
          motion-safe:duration-300
          motion-safe:ease-in-out

          ${CHECKOUT_FORM_WIDTHS[size]}
        `}
      >
        <div className="pt-3">
          <AdaptiveCheckoutForm />
        </div>
      </div>

      <ContainerSizeSelector
        value={size}
        options={CHECKOUT_FORM_SIZE_OPTIONS}
        onChange={setSize}
        name="checkout-form-preview-size"
      />

      <p className="max-w-2xl text-center text-sm font-light lg:text-xl">
        The buttons resize the parent container. The form changes layout through
        CSS Container Queries, not viewport breakpoints.
      </p>

      <p className="sr-only" aria-live="polite">
        Checkout form preview width changed to {size}.
      </p>
    </section>
  );
};

export default CheckoutFormDemo;
