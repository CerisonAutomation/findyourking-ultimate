# Contribution Guide

## Prerequisites

| Tool    | Version  |
|---------|----------|
| Node.js | ≥ 20.0.0 |
| pnpm    | ≥ 9.0.0  |

Install pnpm globally:

```bash
npm install -g pnpm
```

## Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/CerisonAutomation/findyourking-ultimate.git
cd findyourking-ultimate

# 2. Install all dependencies
pnpm install

# 3. Copy environment variables
cp apps/web/.env.example apps/web/.env.local

# 4. Start development
pnpm dev
```

## Environment Variables

### `apps/web`

| Variable                       | Description                   |
|--------------------------------|-------------------------------|
| `NEXT_PUBLIC_SUPABASE_URL`     | Supabase project URL          |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY`| Supabase anonymous key        |
| `AUTH_SECRET`                  | NextAuth secret (32+ chars)   |

### `packages/supabase` (server-side)

| Variable                    | Description                       |
|-----------------------------|-----------------------------------|
| `SUPABASE_URL`              | Supabase project URL              |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key         |

## Adding a New Package

```bash
mkdir packages/my-package
cd packages/my-package
pnpm init
# Add "name": "@fyk/my-package" to package.json
# Copy tsconfig.json from an existing package
# Create src/index.ts
```

## Adding a New App

```bash
cd apps
pnpm create next-app my-app --typescript --tailwind --app
# Update package.json name to @fyk/my-app
# Add workspace:* dependencies as needed
```

## Code Style

- **Formatter**: Biome (`pnpm format`)
- **Linter**: Biome + ESLint (`pnpm lint`)
- **TypeScript**: Strict mode enabled

Run before every commit:

```bash
pnpm format
pnpm lint
pnpm type-check
```

## Pull Request Process

1. Create a branch: `git checkout -b feat/my-feature`
2. Make changes with focused, atomic commits
3. Run the full validation: `pnpm build && pnpm test && pnpm lint`
4. Open a PR against `main`
5. Request review from a team member

## Commit Message Format

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat(web): add profile photo upload
fix(core): correct compatibility score calculation
chore(deps): update supabase to v2.48.0
docs: update contribution guide
```

## Branch Naming

| Type    | Pattern                    |
|---------|----------------------------|
| Feature | `feat/short-description`   |
| Bug fix | `fix/short-description`    |
| Chore   | `chore/short-description`  |
| Docs    | `docs/short-description`   |
