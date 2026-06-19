# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # dev server on port 3001
npm run build    # production build
npm run lint     # ESLint via next lint
```

## Architecture

Next.js 15 App Router portfolio site. Single-page with anchor-based navigation.

**Data source** — all content (projects, skills, experience, education, socials) lives in [src/lib/data.ts](src/lib/data.ts). Edit this file to update portfolio content.

**Active section tracking** — `ActiveSectionContext` ([src/context/active-section.tsx](src/context/active-section.tsx)) tracks which nav section is visible. Components call `useSectionInView(sectionName)` from [src/hooks/hooks.ts](src/hooks/hooks.ts), which uses `react-intersection-observer` to set the active section. A `timeOfLastClick` guard (1 s debounce) prevents scroll-based updates from overriding manual nav clicks.

**Contact form** — server action in [src/actions/sendEmail.ts](src/actions/sendEmail.ts) validates with Zod then sends via Resend. Requires `RESEND_API_KEY` in `.env.development`. The Contact section is currently commented out of the nav links in `data.ts`.

**Styling** — Tailwind CSS. `cn()` utility in [src/utils/cn.tsx](src/utils/cn.tsx) merges `clsx` + `tailwind-merge`. Animations use Framer Motion.

**Path alias** — `@/` maps to `src/`.
