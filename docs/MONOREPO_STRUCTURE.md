# FindYourKing Ultimate — Monorepo Structure

## Overview

This repository is a **pnpm monorepo** powered by [Turborepo](https://turbo.build/repo) that consolidates all Find Your King applications and shared packages.

## Directory Layout

```
findyourking-ultimate/
├── apps/
│   ├── web/          Main Next.js 15 dating app (port 3000)
│   ├── admin/        Admin dashboard (port 3001)
│   └── cli/          CLI tools (fyk command)
├── packages/
│   ├── core/         Shared business logic (matching, profiles)
│   ├── ui/           shadcn/Radix UI component library
│   ├── schemas/      Zod validators & inferred types
│   ├── types/        Core TypeScript type definitions
│   ├── supabase/     Supabase client wrappers (browser & server)
│   ├── auth/         NextAuth v5 configuration
│   └── utils/        Utility functions
├── docs/             Documentation
├── pnpm-workspace.yaml
├── package.json      Root workspace scripts
├── turbo.json        Turbo pipeline configuration
├── tsconfig.json     Root TypeScript config (extended by all workspaces)
├── tailwind.config.ts Root Tailwind config
├── biome.json        Formatter/linter configuration
└── .eslintrc.js      ESLint configuration
```

## Package Naming Convention

All internal packages are scoped under `@fyk/*`:

| Package           | Scope name         |
|-------------------|--------------------|
| `packages/types`  | `@fyk/types`       |
| `packages/schemas`| `@fyk/schemas`     |
| `packages/utils`  | `@fyk/utils`       |
| `packages/supabase`| `@fyk/supabase`   |
| `packages/auth`   | `@fyk/auth`        |
| `packages/ui`     | `@fyk/ui`          |
| `packages/core`   | `@fyk/core`        |
| `apps/web`        | `@fyk/web`         |
| `apps/admin`      | `@fyk/admin`       |
| `apps/cli`        | `@fyk/cli`         |

## Dependency Graph

```
@fyk/types
    ↑
@fyk/schemas   @fyk/utils   @fyk/supabase
         ↑         ↑            ↑
         └────@fyk/core────────┘
                   ↑
           @fyk/auth  @fyk/ui
                   ↑
         @fyk/web  @fyk/admin  @fyk/cli
```

## Scripts

From the repository root:

| Command             | Description                          |
|---------------------|--------------------------------------|
| `pnpm dev`          | Start all apps in development mode   |
| `pnpm build`        | Build all apps and packages          |
| `pnpm lint`         | Lint all workspaces                  |
| `pnpm test`         | Run all tests                        |
| `pnpm type-check`   | TypeScript type checking             |
| `pnpm clean`        | Clean all build artifacts            |
| `pnpm format`       | Format all files with Biome          |
| `pnpm format:check` | Check formatting without writing     |

To run scripts for a specific workspace:

```bash
pnpm --filter @fyk/web dev
pnpm --filter @fyk/core test
```

## Turbo Pipeline

The Turbo pipeline in `turbo.json` ensures:
- Packages are built before apps that depend on them (`"dependsOn": ["^build"]`)
- Dev mode runs concurrently and persistently
- Build outputs are cached (`.next/**`, `dist/**`)
