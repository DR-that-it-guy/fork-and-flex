# Fork & Flex

**Fitness for the day you actually have.**

Fork & Flex is an adaptive fitness and food coach. When a workout is missed, a
meal changes, time disappears, or energy drops, Fork & Flex recommends the next
realistic action instead of asking the user to restart the plan.

## Product principles

- Adapt the plan without punishment or extreme compensation.
- Optimize for consistency, not perfect days.
- Keep recommendations explainable and easy to change.
- Use calculations and safety rules for health decisions; use AI for language,
  personalization, and constrained planning.
- Escalate medical, injury, and disordered-eating concerns to qualified help.

## Initial MVP

1. A short onboarding flow for goals, dietary preferences, equipment, and time.
2. A daily check-in covering energy, soreness, food, schedule, and constraints.
3. A “My day changed” flow that produces a safe revised plan.
4. Minimum Viable Day plans for low-time or low-energy situations.
5. Weekly reflection focused on adherence patterns rather than guilt or streaks.

## Stack

- React 19, TypeScript, and a Next-compatible Vinext runtime
- Tailwind CSS and accessible component primitives
- React Hook Form and Zod for typed forms and validation
- Drizzle ORM with Cloudflare D1 support
- Vercel AI SDK with an OpenAI provider adapter
- Recharts for progress and adherence views
- Cloudflare Workers/Sites-compatible production build

## Local development

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local` before enabling AI-backed features. The
current branded shell does not require an API key.

## Commands

```bash
npm run dev
npm run build
npm run lint
npm run db:generate
```

Fork & Flex is not a medical product and must not diagnose, treat, or prescribe.
