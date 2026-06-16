import ProfileCardDemo from "./features/profile-card/components/ProfileCardDemo";

export default function Home() {
  return (
    <div className="grid min-h-dvh grid-rows-[auto_1fr] p-4 font-sans">
      <header className="w-full">
        <div className="mx-auto w-full xl:px-10">
          <h1 className="text-base font-medium">Adaptive UI Components</h1>
        </div>
      </header>

      <main className="grid place-items-center">
        <div className="flex w-full max-w-3xl flex-col items-center gap-8">
          <ProfileCardDemo />

          <div className=" space-y-3 text-center text-sm font-light lg:text-xl">
            <p>
              The card changes layout through CSS Container Queries, not
              viewport breakpoints.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
// A small accessible component system exploring how reusable interfaces adapt to local layout constraints, interaction state, and assistive technology.
// Adaptive profile card
// Container-query layout and semantic content structure.
// Accessible form field
// Labels, descriptions, errors, required states, and adaptive layout.
// Status notification
// Correct distinction between static messages, role="status", and role="alert".
// Dialog
// Focus handling, Escape behavior, focus restoration, accessible naming, and reduced motion.
