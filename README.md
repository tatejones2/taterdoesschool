# TaterDoesSchool

TaterDoesSchool is a calm, academic-first command center for assignments, classes, events, and weekly planning. This repository currently contains the polished frontend prototype defined by the first milestone in `campusflow_codex_spec.md`.

## What is included

- Responsive application shell with desktop sidebar and mobile navigation
- Today dashboard with a chronological schedule, due work, and upcoming deadlines
- Assignment views, course filters, completion tracking, and local persistence
- Week and month calendar views with consistent course colors
- Course directory and detailed course pages
- Recurring weekly schedule
- Quick-add dialog and Cmd/Ctrl + K command palette
- Settings and dark appearance
- Typed development data that demonstrates the complete product experience

## Stack

- React 19
- Vite
- TypeScript (strict mode)
- React Router
- Tailwind CSS foundation with centralized CSS design tokens
- Lucide React icons
- date-fns (ready for the persistence milestone)

## Local setup

Requirements: Node.js 20+ and npm.

```bash
npm install
npm run dev
```

Vite prints the local URL when it starts. Open it in a browser; the root route redirects to the Today view.

## Scripts

```bash
npm run dev        # local development server
npm run build      # strict TypeScript and production bundle
npm run typecheck  # TypeScript validation
npm run lint       # ESLint
npm run test       # Vitest test runner
npm run preview    # preview the production build
```

## Environment

The prototype does not require environment variables. The next persistence milestone is designed for Supabase. Copy `.env.example` to `.env.local` when that work begins:

```text
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
```

Never place a Supabase service-role key in frontend environment variables.

## Architecture

- `src/App.tsx` contains the first vertical product slice: routes, screens, reusable interface patterns, and interactions.
- `src/data.ts` provides typed demo data and is intentionally isolated so it can be replaced incrementally by server queries.
- `src/types.ts` defines the core frontend entities.
- `src/styles.css` holds the design tokens and responsive Swiss-inspired visual system.

Assignment completion and newly added assignments persist in local storage for the prototype. Courses and calendar events remain seeded demo data until the Supabase milestone.

## Deployment

Every push to `main` runs the validation suite and deploys the generated `dist` directory through GitHub Actions. The published application is available at:

```text
https://taterdoesschool.com/
```

Hash-based client routing is used so every application screen remains refresh-safe on GitHub Pages.

## Next milestone

Add Supabase authentication, profiles, semesters, row-level-security policies, and incremental query replacement without redesigning the current UI architecture.
