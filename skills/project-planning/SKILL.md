---
name: project-planning
description: MVP-first planning for a small single-user Bun + shadcn/ui demo app. Use before building any app under apps/.
---

# Project planning (MVP-first, Bun + shadcn/ui)

Output a short `PLAN.md` (about one page). Opinionated beats exhaustive.

## Steps
1. **Clarify the goal** in one sentence: who uses it, what they see, why it shows off the tech.
2. **Verify the tech** before planning: read the published package (README, `.d.ts`), try the core call in a scratch script, note surprises (browser support, errors, license, release age).
3. **Single-user MVP:** list what's in (the smallest thing that demonstrates the tech end-to-end) and an explicit **Out** list (auth, sharing, deploy, AI add-ons... unless they are the point).
4. **Tasks as vertical slices** in build order, each a user-visible outcome ("type → see diagram"), not a layer ("write the DB").
5. **Prefer prebuilt:** official scaffold, shadcn components, built-ins (`bun:sqlite`, `Bun.serve`, `bun test`) over new deps.
6. **Stack**, one-line rationale each:
   - Bun runtime + package manager.
   - `bunfig.toml` with `[install] minimumReleaseAge = 259200` created **before** any install.
   - Official scaffold (`bun init --react=tailwind` for Bun fullstack; `bunx create-vite` if Vite is genuinely needed).
   - shadcn/ui via `bunx shadcn@latest init`, minimal/neutral preset; add components only when a slice needs them.
   - Pin the demoed package exactly.
7. **Layout by feature:** `src/features/<feature>/` holding its UI, hooks, logic, and tests; `components/ui/` for shadcn output.
8. **Minimal tests/hooks:** tests only for critical logic (persistence, error handling, pure transforms). Pre-commit = format + `tsc --noEmit`.
9. **Run:** `bun install && bun run dev`.
10. **Deferred** items, each with a why.
11. **Validation:** ≥1 screenshot and ≥1 short video (≤30 s) of the running app showing the core flow.
