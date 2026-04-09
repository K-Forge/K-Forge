# K-Forge Web - Agent Context

> Operational context and rules for AI agents in this repository.

---

## Project Overview

**K-Forge Web** is the official public website (landing page) for the K-Forge software development club at Fundacion Universitaria Konrad Lorenz. Deployed on Vercel.

**Live:** https://kforge.vercel.app

## Tech Stack

- **Framework:** Angular 21 (standalone components, no NgModules)
- **State management:** Angular Signals (`signal`, `computed`) for local reactive state
- **Styling:** Tailwind CSS 3 with project design tokens
- **i18n:** Custom service with `es` and `en` support (`src/app/services/i18n.service.ts`)
- **External integration:** GitHub API for public repository data
- **Package manager:** pnpm (dependencies) + Bun (script runner)
- **Deploy:** Vercel

## Project Structure

```text
K-Forge/
├���─ src/
│   ├���─ app/
│   │   ├── components/     # Standalone visual sections
│   │   ├── services/       # i18n, GitHub API, reusable logic
│   │   └── app.ts          # Main component composition
│   └── styles.css          # Global styles + design tokens
├── public/                  # Static assets
├── angular.json
├── tailwind.config.js
├── vercel.json
└── package.json
```

## Dev Commands

```bash
pnpm install && bun start   # Dev server → http://localhost:4200
bun run build               # Production build
```

Tool setup (one-time):

```bash
corepack enable && corepack prepare pnpm@latest --activate
curl -fsSL https://bun.sh/install | bash
```

## Conventions

- **All components are standalone** (no NgModules). Use signals for local state.
- **Modern control flow:** `@if`, `@for` — not `*ngIf`/`*ngFor`.
- **i18n is mandatory:** all new visible text must be added in both `es` and `en` in `src/app/services/i18n.service.ts`.
- **Tailwind tokens:** use existing tokens (`midnight`, `surface`, `violet-primary`, etc.) — avoid hardcoded colors.
- **New sections:** create standalone component under `src/app/components/<section>/`, register in `app.ts`, add i18n keys.
- **Commits:** `type: message in english` — Conventional Commits, lowercase, no scope, no final period.
- **Branches:** Git Flow (`main`, `develop`, `feature/*`, `chore/*`, `bugfix/*`, `hotfix/*`, `release/*`).

## AI Agent Instructions

- This is a **public-facing, read-only-contributions** repository. Only authorized K-Forge members maintain it.
- Respect the Vercel deployment configuration (`vercel.json`).
- Do not create CONTRIBUTING.md, CONTRIBUTORS.md, or modify LICENSE.
- Never hardcode credentials or sensitive data.
- Keep i18n parity: every new user-facing string must exist in both `es` and `en`.
- Test changes locally with `bun start` before proposing.
