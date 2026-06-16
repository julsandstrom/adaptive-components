import AdaptiveCardDemo from "./components/AdaptiveCardDemo";

export default function Home() {
  return (
    <div className="grid min-h-dvh grid-rows-[auto_1fr] p-4 font-sans">
      <header className="w-full">
        <div className="mx-auto w-full max-w-3xl">
          <h1 className="text-base font-medium">Adaptive UI Components</h1>
        </div>
      </header>

      <main className="grid place-items-center">
        <div className="flex w-full max-w-3xl flex-col items-center gap-8">
          <AdaptiveCardDemo />

          <p className="max-w-xl text-center text-sm font-light">
            The card itself changes layout through CSS Container Queries, not
            viewport breakpoints.
          </p>
          <p className="max-w-xl text-center text-sm font-light">
            *Container width is capped on small screens to prevent horizontal
            overflow.
          </p>
        </div>
      </main>
    </div>
  );
}
