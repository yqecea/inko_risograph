# AGENTS.md — INKO Risograph Landing Page

## Project Overview

Single-page React 19 landing page with a risograph/print aesthetic. Vite bundler, TypeScript, Tailwind CSS via CDN. No backend. All source lives under `inko---the-risograph-saas-experience/`.

## Build & Dev Commands

```bash
# All commands run from: inko---the-risograph-saas-experience/
npm run dev        # Vite dev server — http://localhost:3000
npm run build      # Production build
npm run preview    # Preview production build
```

No linter, formatter, or test framework is configured. There are no test commands.

## Project Structure

```
inko---the-risograph-saas-experience/
  index.html          # Entry HTML — loads Tailwind CDN, defines CSS vars & global styles
  index.tsx            # React root mount
  App.tsx              # Top-level layout — assembles all sections, global CSS overrides
  types.ts             # Shared TypeScript types & enums (ColorPalette, FeatureItem, etc.)
  constants.tsx        # Data constants (NAV_LINKS, FEATURES, PRICING_PLANS, TESTIMONIALS)
  vite.config.ts       # Vite config — port 3000, path alias @/ -> project root
  services/
    inkEngine.ts       # Singleton service class (InkEngine) — thematic simulation logic
  components/
    Navbar.tsx
    Hero.tsx
    FeatureGrid.tsx    # "A Better Type of Output" — feature cards grid
    Showcase.tsx       # "Layered Intelligence" — horizontal scroll process slides
    Comparison.tsx     # Comparison ledger table
    ShowcaseSectionWrapper.tsx  # Wrapper for the print-head simulation
    ShowcaseSectionExtended.tsx # Interactive print-head animation
    Pricing.tsx
    GrainOverlay.tsx   # Fixed SVG noise texture overlay (z-9999)
```

## Tech Stack

- **React 19** with functional components (`React.FC`)
- **TypeScript 5.8** — target ES2022, `react-jsx` transform, path alias `@/*`
- **Vite 6** — dev server + bundler
- **Tailwind CSS via CDN** (`<script src="https://cdn.tailwindcss.com">` in index.html) — NOT installed as a dependency, no `tailwind.config.js`
- **Fonts**: Syne (headings), Instrument Serif (body/quotes), Space Grotesk (base)
- **No state management library** — local `useState`/`useEffect` only
- **No router** — single-page scroll-based navigation

## Code Style

### Components

- One component per file, **default export** always
- All components typed as `React.FC` with no props or explicit prop interfaces
- PascalCase filenames matching component names
- JSDoc comments on components and complex methods

```tsx
const MyComponent: React.FC = () => {
  // ...
  return (<section>...</section>);
};
export default MyComponent;
```

### Imports

- React imports first, then local modules
- Types from `../types`, data from `../constants`
- Destructured named imports: `import { FEATURES } from '../constants'`
- No barrel exports — import directly from source files

### TypeScript

- **Enums** for fixed value sets (`ColorPalette`)
- **Interfaces** for data shapes (`FeatureItem`, `PricingPlan`, `PrintState`)
- Interfaces defined in `types.ts` for shared types, or inline in component file for local-only types
- Avoid `as any`, `@ts-ignore`, `@ts-expect-error`

### Naming

| Entity | Convention | Example |
|--------|-----------|---------|
| Components | PascalCase | `FeatureGrid`, `GrainOverlay` |
| Component files | PascalCase.tsx | `FeatureGrid.tsx` |
| Service files | camelCase.ts | `inkEngine.ts` |
| Interfaces | PascalCase | `PrintState`, `TechnicalMetric` |
| Enums | PascalCase | `ColorPalette` |
| Constants | UPPER_SNAKE_CASE | `NAV_LINKS`, `PRICING_PLANS` |
| CSS variables | `--riso-*` | `--riso-pink`, `--riso-ink` |
| Tailwind colors | `riso-*` | `text-riso-pink`, `bg-riso-blue` |

### Styling

- **Tailwind utility classes** for all styling — no CSS modules, no styled-components
- Inline `<style>` blocks at component bottom for `@keyframes` and component-scoped CSS
- Inline `style={}` for dynamic values driven by state (transforms, opacity, clip-path)
- Design tokens defined as CSS custom properties in `index.html`:
  ```
  --riso-paper: #f4f1ea    --riso-ink: #1a1a1a
  --riso-pink: #ff33cc     --riso-blue: #0055ff
  --riso-yellow: #ffdd00   --riso-green: #00cc66
  ```

### Patterns in Use

- **Scroll-reactive animations**: `window.addEventListener('scroll', ...)` in `useEffect` with cleanup
- **IntersectionObserver**: Visibility-triggered state changes (ShowcaseSectionExtended)
- **Mouse parallax**: `mousemove` listener → normalized coords → inline transform styles (Hero)
- **Tailwind `group`/`group-hover:`**: Parent hover propagation for card interactions
- **`mix-blend-mode: multiply`**: Risograph-style color layering throughout
- **Halftone pattern**: `.halftone-bg` utility via `radial-gradient` + SVG `<pattern>` elements
- **`useMemo`** for static derived data; **`useRef`** for DOM element references
- **Singleton pattern** for service class (`InkEngine.getInstance()`)

## Known Gotchas

1. **Global `<style>` leaks**: Components use inline `<style>` tags that produce global CSS. Selectors like `.group:hover` will affect ALL elements with `.group` class across the entire page — not just the component. Always scope selectors to a unique parent class.

2. **Tailwind via CDN**: There is no `tailwind.config.js`. Custom theme extensions are NOT available. Custom colors (`riso-pink` etc.) are referenced in class names but only work because they match CSS variable names that Tailwind CDN picks up from the inline config. Do not add `tailwind.config.js`-only features.

3. **Duplicated `@keyframes`**: `float`, `marquee`, and `pulse` are redefined in multiple components (`Hero.tsx`, `FeatureGrid.tsx`, `App.tsx`). The last definition wins. Be careful when modifying animation timing — check all definitions.

4. **No formatting config**: No Prettier or ESLint. Indentation varies (2-space dominant, some 3-space). Match the indentation of the file you are editing.

5. **Font classes are global**: `.font-serif` and `.font-syne` are defined in `index.html` `<style>` block as plain CSS classes, not Tailwind theme extensions.

## Design Language

The visual identity is **risograph print aesthetic**: deliberate misalignment, halftone dots, grain textures, `mix-blend-multiply` color overlaps, heavy typography (Syne font), editorial layout. When adding new sections, match:
- Section numbering pattern: `"0N / THE TITLE"` labels
- Uppercase tracking-heavy micro-labels (`text-[10px] uppercase tracking-[0.4em] font-black`)
- High-contrast color pops against paper (`#f4f1ea`) or ink (`#1a1a1a`) backgrounds
- Decorative offset layers, rotated stamps, diagonal tension breaks
