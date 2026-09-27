# AGENTS.md

Rules for agents working in this repo.

1. **Scope:** only add or update files under `apps/<slug>/` (plus `tracking/seen-bookmarks.json` and the README app table). Never modify another app.
2. **Self-contained:** each app has its own `package.json`, lockfile, and `bunfig.toml`, and must run with `bun install && bun run dev` from its folder. No shared root workspace.
3. **Plan first:** write `apps/<slug>/PLAN.md` using [`skills/project-planning/SKILL.md`](skills/project-planning/SKILL.md) before writing code.
4. **Defaults:** Bun (runtime, package manager, tests), React + shadcn/ui (minimal preset, add components only as needed), start from an official scaffold (`bun init --react=...` or `bunx create-*`).
5. **Supply chain:** create `apps/<slug>/bunfig.toml` with `[install] minimumReleaseAge = 259200` **before** any install. Per-package exceptions (`minimumReleaseAgeExcludes`) need explicit user approval and a note in the PLAN.
6. **Pin** the technology being demoed to an exact version.
7. **Tests:** only for critical logic. **Hooks:** format + fast static check only.
8. **Evidence:** every demo PR must include ≥1 screenshot and ≥1 video of the running app, committed under `apps/<slug>/docs/` and embedded/linked in the PR body.
9. One demo per branch, one PR per demo, into `main`.
