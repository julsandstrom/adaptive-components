# Adaptive Components

A small collection of React components built to adapt to the space around them rather than relying only on the browser viewport.

The project explores three areas of frontend development:

- CSS Container Queries
- semantic and accessible HTML
- reusable component architecture

## The idea

Responsive interfaces are commonly built around viewport breakpoints such as mobile, tablet, and desktop. That works well for page layouts, but reusable components do not always know where they will be placed.

The same component might appear inside:

- a narrow sidebar
- a dashboard grid
- a modal
- a full-width section

Adaptive Components uses CSS Container Queries so each component can respond to the width of its own parent container.

## Adaptive Card

The first component is an adaptive profile card with three layout states:

- **Narrow**
- **Medium**
- **Large**

The demo controls only resize the card's parent container. They do not directly change the card layout.

The component itself responds through container query breakpoints:

```tsx
<div className="@container/profile-card">
  <div className="@md/profile-card:grid-cols-[1fr_auto]">...</div>
</div>
```

This separation is important:

- React state controls the demo environment
- CSS controls the component layout
- the component remains reusable outside the demo

## Accessibility

Accessibility is treated as part of the component structure rather than an additional layer added afterwards.

The current implementation includes:

- semantic `article`, `header`, and list elements
- a logical heading structure
- accessible labels for grouped controls
- visible button states
- `aria-pressed` for the active preview option
- layouts that preserve a logical reading order
- responsive behavior without horizontal page overflow

The project will also explore accessibility patterns for interactive components such as form fields, notifications, and dialogs.

## Built with

- Next.js
- React
- TypeScript
- Tailwind CSS
- CSS Container Queries

## Planned components

- Adaptive profile card
- Accessible form field
- Status notification
- Dialog
- Additional layout-aware content components

Each component will include a short explanation of:

- the problem it addresses
- its adaptive behavior
- relevant accessibility decisions
- implementation details

## Running locally

Clone the repository and install the dependencies:

```bash
git clone https://github.com/julsandstrom/adaptive-components.git
cd adaptive-components
npm install
```

Start the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Project status

This project is currently in development. The first adaptive component is implemented, with additional accessible components planned.

## Links

- [Live demo](https://adaptive-components.vercel.app/)
- [Portfolio](https://julsan.netlify.app/)
