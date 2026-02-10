<!-- .github/copilot-instructions.md - guidance for AI coding agents -->
# Copilot instructions — Tailwind + Next (app dir)

Purpose: make an AI coding agent productive quickly in this repo.

- Project type: Next.js (app router) with TypeScript and Tailwind CSS.
- Root of app: `src/app` (see `layout.tsx`) — global CSS in `src/app/globals.css`.
- Component pattern: `src/components/<ComponentName>/index.tsx` with named exports (see `Sidebar`, `NavItem`, `UsedSpaceWidget`, `Logo`).

Key commands (repo uses pnpm lockfile; prefer `pnpm`):
- Install: `pnpm install`
- Dev server: `pnpm dev` (runs `next dev`)
- Build: `pnpm build`
- Start prod: `pnpm start`
- Lint (explicit): `pnpm exec eslint src --ext .ts,.tsx`

Important files to reference when making changes:
- `package.json` — scripts & deps
- `next.config.ts` — Next config (empty placeholder)
- `tailwind.config.js` — content is `./src/**/*.tsx` and defines a custom `gridTemplateColumns.app` and color `lilith`
- `src/app/layout.tsx` — root layout mounting the `Sidebar` and main content
- `src/components/Sidebar/*` — canonical example of component structure and Tailwind usage

Codebase conventions and patterns (observed, not aspirational):
- Use named exports for components (e.g., `export function Sidebar() {}`) — follow existing style.
- Files are TypeScript `.tsx`. Keep Prop types via interfaces (see `NavItem.tsx`).
- Tailwind classes are applied inline in JSX. The project uses `prettier-plugin-tailwindcss`, so class ordering is handled by Prettier; do not manually reorder classes unless intentionally changing semantics.
- Icon usage: `lucide-react` — components accept props like `className` for sizing/colors.
- Layout: `src/app/layout.tsx` creates a two-column grid using the `app` column template from `tailwind.config.js`. Add new top-level UI regions by updating this layout.

When editing or adding components:
- Place components under `src/components/<Name>/` and export them from `index.tsx`.
- If you add non-`.tsx` files that contain Tailwind class names (e.g., `.js` templates), update `tailwind.config.js` `content` if needed.
- Prefer small, focused components that receive data via props; this codebase is UI-first and does not include app-level data fetching patterns yet.

Formatting, linting, and style:
- Prettier is configured with `prettier-plugin-tailwindcss` — run Prettier/formatting before committing.
- ESLint extends `@rocketseat/eslint-config`; run explicit lint command above when making changes.

Common quick fixes an agent may perform:
- Fix broken relative imports (example: `import { Logo } from` in `Sidebar/index.tsx` should import `../Sidebar/Logo` or `./Logo`). Verify file paths under `src/components`.
- Ensure named exports are used consistently and update imports accordingly.
- Use existing Tailwind tokens (spacing, colors) and the `gridTemplateColumns.app` utility for layout changes.

What not to assume:
- There are no tests in repo — do not add or modify tests unless asked.
- No backend/API routes are present in the workspace; focus on frontend/UI edits.

If unsure, reference these files first: `src/app/layout.tsx`, `tailwind.config.js`, `package.json`, `src/components/Sidebar/index.tsx`.

If this file is missing content you need, ask the repo owner which package manager and Node version they prefer, and whether they want CI/lint hooks added.

---
Please review and tell me which parts to expand (build details, CI, or Node version recommendations).
