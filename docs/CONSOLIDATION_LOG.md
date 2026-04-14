# Consolidation Log — FindYourKing Ultimate Monorepo

## Phase 1: Monorepo Bootstrap (This PR)

**Date:** 2026-04-14  
**Status:** ✅ Complete

### Actions Taken

- Initialized pnpm workspace (`pnpm-workspace.yaml`)
- Created root `package.json` with workspace scripts (dev, build, lint, test, type-check)
- Configured Turborepo (`turbo.json`) with full build pipeline and caching
- Added root TypeScript config (`tsconfig.json`) in strict mode
- Added root ESLint config (`.eslintrc.js`)
- Added root Tailwind config (`tailwind.config.ts`) with brand colours
- Added Biome formatter/linter (`biome.json`)
- Scaffolded `apps/web/` — main Next.js 15 app skeleton
- Scaffolded `apps/admin/` — admin dashboard skeleton
- Scaffolded `apps/cli/` — CLI tools skeleton
- Created shared package `packages/types` — core TypeScript types
- Created shared package `packages/schemas` — Zod validators
- Created shared package `packages/utils` — utility functions
- Created shared package `packages/supabase` — Supabase client wrappers
- Created shared package `packages/auth` — NextAuth v5 configuration
- Created shared package `packages/ui` — shadcn/Radix component library
- Created shared package `packages/core` — matching & profile business logic
- Added docs: MONOREPO_STRUCTURE.md, CONTRIBUTION_GUIDE.md, CONSOLIDATION_LOG.md

---

## Repos to Merge — Full Inventory (22+ Variants)

The following repositories have been identified for consolidation into this monorepo.  
Each entry includes: **source repo → target location → merge strategy**.

### 🟥 Priority 1 — Core Variants (Merge Immediately)

| # | Source Repo | Target | Strategy |
|---|-------------|--------|----------|
| 1 | `findyourking` | `apps/web/` | Cherry-pick latest features, merge into main app |
| 2 | `FIndYourKing-nx` | `apps/web/` + root config | Convert NX config → Turbo; migrate packages |
| 3 | `FindYourKingZero` | `apps/zero/` | Add as new app workspace (enterprise variant) |
| 4 | `find-your-king-zero` | `apps/zero/` | Deduplicate with FindYourKingZero; keep best |
| 5 | `find-your-king-nextjs` | `apps/web/` | Merge Next.js-specific features into `apps/web` |
| 6 | `find-your-king-MERGED-BEST` | `apps/web/` | Review for best-of features; cherry-pick |
| 7 | `find-your-king-HORUS-OMEGA` | `packages/core/` | Extract AI/P2P logic into core package |
| 8 | `findyourking-zenith-minimal` | `apps/web/` | UI/design tokens reference only |

### 🟧 Priority 2 — Named Variants (Evaluate & Merge)

| # | Source Repo | Target | Strategy |
|---|-------------|--------|----------|
| 9  | `Findyourkingapp` | `apps/web/` | Check for unique features vs main app |
| 10 | `FINDYOURKING00` | Archive | No unique value; archive after audit |
| 11 | `newfyk` | `packages/core/` | Extract any new business logic |
| 12 | `fyking` | `apps/web/` | Main production variant — high priority |
| 13 | `fyking.men` | `apps/web/` | Subdomain variant; merge routing config |
| 14 | `fyking.men.app` | `apps/web/` | App variant of subdomain |
| 15 | `fyking.men-w0` | Archive | Experimental; archive after review |
| 16 | `Fykingapp` | Archive | Duplicate of `Findyourkingapp` |

### 🟨 Priority 3 — Production Builds (Integrate Features)

| # | Source Repo | Target | Strategy |
|---|-------------|--------|----------|
| 17 | `FYKBEST` | `apps/web/` | Extract "best" UI patterns |
| 18 | `FYKPRODUCTION` | `apps/web/` | Production config; extract .env patterns |
| 19 | `FYKZ` | Archive | Archive |
| 20 | `FYKZERO` | `apps/zero/` | Merge with FindYourKingZero |
| 21 | `FYKZERO1` | Archive | Duplicate of FYKZERO; archive |

### 🟦 Priority 4 — Other Variants (Archive or Merge)

| # | Source Repo | Target | Strategy |
|---|-------------|--------|----------|
| 22 | `FINDYRK` | Archive | Archive — no unique value |
| 23 | `FKYFINAL` | `apps/web/` | Review "final" changes; cherry-pick |
| 24 | `FYKKING` | Archive | Archive — typo variant |

---

## Merge Strategy Per Phase

### Phase 2 (Next PR) — Core App Migration

- [ ] Migrate `fyking` (main production) → `apps/web/`
- [ ] Migrate `FindYourKingZero` → `apps/zero/`
- [ ] Extract AI matching logic from `find-your-king-HORUS-OMEGA` → `packages/core/`
- [ ] Add Supabase migrations to `packages/supabase/migrations/`

### Phase 3 — Feature Extraction

- [ ] Extract WebRTC/P2P logic → `packages/core/` or new `packages/p2p/`
- [ ] Extract PIX payment integration → `packages/payments/`
- [ ] Extract face age-gate → `packages/ai/`
- [ ] Unify shadcn components across repos → `packages/ui/`

### Phase 4 — Configuration Unification

- [ ] Standardize all ESLint configs to root `.eslintrc.js`
- [ ] Migrate all Tailwind configs to root `tailwind.config.ts`
- [ ] Unify CI/CD pipelines under `.github/workflows/`
- [ ] Add shared Vitest + Playwright setup

### Phase 5 — Archive & Cleanup

- [ ] Archive 15+ duplicate repos on GitHub
- [ ] Update README in each archived repo pointing to this monorepo
- [ ] Final dependency audit: remove unused packages
- [ ] Publish `@fyk/*` packages to private registry (optional)

---

## Shared Packages Extracted

| Package | Source repos | Status |
|---------|-------------|--------|
| `@fyk/types` | All FYK repos | ✅ Created (Phase 1) |
| `@fyk/schemas` | All FYK repos | ✅ Created (Phase 1) |
| `@fyk/utils` | All FYK repos | ✅ Created (Phase 1) |
| `@fyk/supabase` | 40+ repos | ✅ Created (Phase 1) |
| `@fyk/auth` | 25 repos | ✅ Created (Phase 1) |
| `@fyk/ui` | 70+ repos | ✅ Created (Phase 1) |
| `@fyk/core` | FYK variants | ✅ Created (Phase 1) |
| `@fyk/p2p` | HORUS-OMEGA, Zero | 🔲 Planned (Phase 3) |
| `@fyk/payments` | Production variants | 🔲 Planned (Phase 3) |
| `@fyk/ai` | Zero, HORUS | 🔲 Planned (Phase 3) |

---

## Tech Stack Decisions

| Concern | Choice | Rationale |
|---------|--------|-----------|
| Package manager | pnpm 9 | Best monorepo support, fast installs |
| Build orchestration | Turborepo 2 | Incremental builds, remote caching |
| Framework | Next.js 15 | App router, RSC, edge-ready |
| Database | Supabase | Already used in 90%+ of repos |
| Auth | NextAuth v5 | Supabase adapter available |
| Styling | Tailwind CSS + shadcn/ui | Consistent across all repos |
| Formatter | Biome | Replaces Prettier + ESLint for formatting |
| Linter | ESLint + TypeScript | Strict type checking |
| Testing | Vitest + Playwright | Unit + E2E coverage |
| Deployment | Vercel | Already used for 50+ repos |
