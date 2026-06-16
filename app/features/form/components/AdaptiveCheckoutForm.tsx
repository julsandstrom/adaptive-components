import FormField from "./FormField";

const AdaptiveCheckoutForm = () => {
  return (
    <section
      aria-labelledby="checkout-form-title"
      className="
        @container/checkout-form
        w-full
      "
    >
      <header className="mb-8 text-center">
        <h2 id="checkout-form-title" className="text-2xl font-bold">
          Adaptive Checkout Form
        </h2>

        <p className="mt-1 font-light">
          This component adapts to the space it is given.
        </p>
      </header>

      <form className="space-y-8" noValidate>
        <div
          className="
            grid gap-8

            @lg/checkout-form:grid-cols-2
            @lg/checkout-form:items-start
          "
        >
          <fieldset className="grid gap-5">
            <legend className="mb-4 text-lg font-semibold">
              Contact details
            </legend>

            <FormField
              id="email"
              name="email"
              type="email"
              label="Email"
              autoComplete="email"
              required
            />

            <div
              className="
                grid gap-5

                @md/checkout-form:grid-cols-2
                @lg/checkout-form:grid-cols-2
              "
            >
              <FormField
                id="first-name"
                name="firstName"
                label="First name"
                autoComplete="given-name"
                required
              />

              <FormField
                id="last-name"
                name="lastName"
                label="Last name"
                autoComplete="family-name"
                required
              />
            </div>
          </fieldset>

          <fieldset className="grid gap-5">
            <legend className="mb-4 text-lg font-semibold">
              Delivery address
            </legend>

            <FormField
              id="address"
              name="address"
              label="Address"
              autoComplete="street-address"
              required
            />

            <div
              className="
                grid gap-5

                @md/checkout-form:grid-cols-2
              "
            >
              <FormField
                id="postal-code"
                name="postalCode"
                label="Postal code"
                autoComplete="postal-code"
                required
              />

              <FormField
                id="city"
                name="city"
                label="City"
                autoComplete="address-level2"
                required
              />
            </div>
          </fieldset>
        </div>

        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            name="saveDetails"
            className="
              mt-1 size-5 shrink-0
              accent-black
            "
          />

          <span>Save details for the next purchase</span>
        </label>

        <div
          className="
            flex flex-col gap-4

            @md/checkout-form:flex-row
            @md/checkout-form:justify-between

            @lg/checkout-form:items-center
          "
        >
          <button
            type="button"
            className="
              min-h-12 rounded-xl
              border border-black/20
              px-6
              transition-colors
              hover:bg-black/5
              focus-visible:outline
              focus-visible:outline-2
              focus-visible:outline-offset-2

              @md/checkout-form:order-1
            "
          >
            Return to cart
          </button>

          <button
            type="submit"
            className="
              min-h-12 rounded-xl
              bg-black px-6
              text-white
              transition-colors
              hover:bg-black/80
              focus-visible:outline
              focus-visible:outline-2
              focus-visible:outline-offset-2

              @md/checkout-form:order-2
            "
          >
            Continue to payment
          </button>
        </div>
      </form>
    </section>
  );
};

export default AdaptiveCheckoutForm;
