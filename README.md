# FindYourKing Ultimate

A production-grade luxury dating platform monorepo built with Next.js 15, Supabase, and Turborepo.

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 App Router, React 19 |
| Auth & DB | Supabase (Auth + PostgreSQL) |
| Styling | Tailwind CSS, CSS variables (shadcn tokens) |
| State | Zustand (client), TanStack Query v5 (async) |
| Validation | Zod v3 |
| UI Primitives | Radix UI, class-variance-authority |
| Animations | Framer Motion |
| Monorepo | pnpm workspaces + Turborepo |
| Linting | Biome |

## Project Structure

```
findyourking-ultimate/
├── apps/
│   ├── web/          # Main dating app (@fyk/web) — port 3000
│   └── admin/        # Admin dashboard (@fyk/admin) — port 3001
├── packages/
│   ├── types/        # @fyk/types — branded ID types & domain interfaces
│   ├── schemas/      # @fyk/schemas — Zod validation schemas
│   ├── utils/        # @fyk/utils — shared utility functions
│   ├── supabase/     # @fyk/supabase — SSR-compatible Supabase clients
│   ├── auth/         # @fyk/auth — Supabase Auth helpers
│   ├── ui/           # @fyk/ui — shadcn-style React components
│   └── core/         # @fyk/core — business logic (matching, profiles)
└── .github/
    └── workflows/ci.yml
```

## Setup

### Prerequisites

- Node.js >= 20
- pnpm >= 9

### Installation

```bash
pnpm install
```

### Environment Variables

Copy `.env.example` to `.env.local` in `apps/web/`:

```bash
cp apps/web/.env.example apps/web/.env.local
```

Fill in your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Development

```bash
# Start all apps
pnpm dev

# Start web app only
pnpm --filter @fyk/web dev

# Start admin only
pnpm --filter @fyk/admin dev --port 3001
```

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start all apps in dev mode |
| `pnpm build` | Build all apps and packages |
| `pnpm lint` | Lint with Biome |
| `pnpm type-check` | TypeScript type checking |
| `pnpm format` | Format with Biome |

## Apps

### web (`apps/web`)

Main dating platform with:
- Landing page with pricing
- Auth (email/password + Google OAuth)
- Discover — swipeable card stack with Framer Motion
- Matches — grid of mutual matches
- Messages — real-time-style chat
- Profile view & edit
- Settings (account, notifications, privacy, subscription)

### admin (`apps/admin`)

Internal admin dashboard with:
- Metrics overview
- User management table
- Reports moderation

## Packages

- **`@fyk/types`** — Branded ID types, domain interfaces (User, Profile, Match, Message, etc.)
- **`@fyk/schemas`** — Zod schemas for all API inputs
- **`@fyk/utils`** — debounce, throttle, formatRelativeTime, groupBy, etc.
- **`@fyk/supabase`** — Browser, server, middleware, and admin Supabase clients
- **`@fyk/auth`** — signIn, signUp, signOut, signInWithGoogle, resetPassword
- **`@fyk/ui`** — Button, Card, Input, Avatar, Badge, Dialog, Tabs, Select, Switch, etc.
- **`@fyk/core`** — Compatibility scoring, profile helpers, notification/message formatters
