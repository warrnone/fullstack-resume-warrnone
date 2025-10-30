## Repo snapshot (why you're here)

This is a small React + Vite single-page portfolio/resume site using TailwindCSS and MUI for theming. The app is composed of simple functional components under `src/components/` and bootstrapped from `src/main.jsx` -> `src/App.jsx`.

## Quick start (commands you can run)

- Install & start dev server: `npm install` then `npm run dev` (Vite)
- Build for production: `npm run build`
- Preview a production build locally: `npm run preview`
- Linting: `npm run lint` (ESLint)

These scripts are defined in `package.json`.

## Big-picture architecture & why

- Single-page React app (no router) — `App.jsx` composes sections: `Hero`, `About`, `Skills`, `Experience`, `Projects`, `Contact`, `Footer`.
- Visuals use Tailwind utility classes for layout and spacing. Tailwind scans `./src/**/*.{js,jsx,ts,tsx}` and `index.html` (`tailwind.config.js`).
- Theme handling mixes Tailwind dark-mode (class strategy) and MUI ThemeProvider for component-level palette tweaks: see `src/components/ThemeProvider.jsx`.

## Project-specific conventions and patterns

- Components are small, self-contained functional components in `src/components/`. Follow existing naming and export patterns (default exports for visual components).
- Global theme: `CustomThemeProvider` toggles `document.body.classList.toggle('dark', ...)` and provides `useThemeMode()` hook. To toggle theme in new components, import `useThemeMode`:

  Example: const { mode, toggleTheme } = useThemeMode();

- Styling: prefer Tailwind utility classes for layout and basic styling. Use MUI theme only when adding Material UI components or palette-level customizations.
- Dark mode: Tailwind dark styles rely on the `dark` class on `<body>` (not media queries). Ensure `document.body.classList` is used when adding/removing dark mode.

## Key files to reference

- `package.json` — scripts and deps (Vite, Tailwind, ESLint, MUI)
- `vite.config.js` — Vite config with React plugin
- `tailwind.config.js` — content paths and darkMode: "class"
- `src/main.jsx` — app root and `CustomThemeProvider` wrapper
- `src/App.jsx` — top-level layout and which components are included
- `src/components/ThemeProvider.jsx` — theme context, hook, and MUI theme creation

## Integration points & external deps

- UI libs installed: @mui/material, @mui/icons-material, @emotion/*, framer-motion, react-icons
- Tailwind CSS + PostCSS used for layout and utilities
- No backend or API endpoints in this repository — static site

## Dev workflow notes for an AI agent

- When changing styles, update `index.css` or `App.css` only when a utility class cannot express the layout.
- Avoid altering `ThemeProvider` semantics unless you update both the body-dark toggle and the MUI palette branches.
- Run `npm run lint` after edits; project uses ESLint — keep changes small and idiomatic.
- Add new components under `src/components/` and import them in `App.jsx` (place order matters for scroll/visual flow).

## Examples of safe edits

- Add a new section component: create `src/components/NewSection.jsx`, export default, then `import NewSection from './components/NewSection'` and add `<NewSection />` into `App.jsx` where appropriate.
- Add a MUI-only component: wrap it in `ThemeProvider` and rely on the existing theme object from `ThemeProvider.jsx`.

## What I could not infer

- There are no test scripts or CI configs in the repo, and no `.github` workflows to reference. If you want PR checks or unit tests, say so and I can scaffold a small GitHub Actions workflow and a basic test harness.

---
If any section is unclear or you want extra guidance (example PR templates, CI, or tests), tell me which area to expand and I'll iterate.
