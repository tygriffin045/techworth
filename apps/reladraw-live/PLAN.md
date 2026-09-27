# Reladraw Live — MVP Plan

**Goal:** A one-screen playground where you type reladraw source on the left, see the SVG render live on the right, and save diagrams locally.

## Single-user MVP
**In:** textarea editor · live SVG preview (debounced ~150 ms) · inline error showing line + message, last good render kept · example picker (5–6 files adapted from the repo's `examples/`) · theme override dropdown (13 built-in `THEME_NAMES`) · Download SVG / Copy source · save, list, load, delete named diagrams (bun:sqlite).
**Out:** auth, sharing/URLs, collaboration, AI "prompt → diagram", syntax highlighting/LSP, PNG export, drag-to-edit canvas, DOM-based text measurement, deploy.

## Tasks (vertical slices, build order)
1. **Skeleton runs:** `bunfig.toml` first, scaffold, `bun run dev` serves a blank page with one shadcn Button.
2. **Type → see diagram:** split pane; `compile()` runs in the browser on each (debounced) edit; SVG shown via `dangerouslySetInnerHTML` (reladraw output only).
3. **Mistakes are legible:** `SourceError` → "line N: message" under the editor, offending line highlighted in the gutter; any other thrown error shown generically; preview keeps last good SVG.
4. **Explore quickly:** example dropdown + theme dropdown (passes `THEMES[name]` as `theme`, which beats the file's `diagram theme:`).
5. **Take it with you:** Download `.svg` + Copy source.
6. **Keep my work:** `GET/POST/PUT/DELETE /api/diagrams` on bun:sqlite (`data/diagrams.sqlite`); sidebar list, Save / Save as / Delete; last-opened restored on load.
7. **Prove it:** tests, hooks, screenshot + video (see Validation).

## Stack
- **Bun 1.4 (runtime + package manager):** one tool for server, bundler, tests, SQLite.
- **Root `bunfig.toml` created before any install:** `[install] minimumReleaseAge = 259200` + `minimumReleaseAgeExcludes = ["reladraw"]` (0.8.1 was published 2026-09-27 and is otherwise blocked until 2026-09-30; zero-dep package, tarball reviewed).
- **Scaffold `bun init --react=tailwind`** (Bun's official fullstack template: `Bun.serve` routes + HTML imports + React + Tailwind): no Vite, one process, API and UI on the same port.
- **shadcn/ui via `bunx shadcn@latest init`** (minimal, neutral preset); add only Button, Select, Input, Sonner, and Resizable as needed.
- **reladraw pinned exactly `0.8.1`:** syntax is explicitly unstable; bump deliberately.
- **bun:sqlite:** built-in, zero-dep, one file.

## Layout (by feature)
```
bunfig.toml  package.json  src/
  index.ts               # Bun.serve: routes { "/": index.html, "/api/diagrams/*": ... }
  index.html  frontend.tsx  App.tsx
  features/editor/       # Editor.tsx, useCompile.ts, compile.ts (+ compile.test.ts)
  features/preview/      # Preview.tsx, download.ts
  features/examples/     # examples/*.reladraw, ExamplePicker.tsx
  features/diagrams/     # store.ts (+ store.test.ts), routes.ts, DiagramList.tsx
  components/ui/         # shadcn output
data/                    # diagrams.sqlite (gitignored)
```

## Testing & hooks
- `bun test` only for critical logic: `compile.ts` wrapper (valid → `{svg}`, bad → `{error:{line,message}}`, unknown throw → generic error) and `store.ts` (create/list/get/update/delete against `:memory:`).
- Pre-commit (simple-git-hooks or lefthook): Prettier/Biome format on staged files + `tsc --noEmit`. Nothing slower.

## Run
```
bun install && bun run dev    # http://localhost:3000
```

## Deferred (why)
- DOM `Measurer` for exact proportional fonts: default monospace measurer is correct and consistent; revisit if text looks off.
- Share links / deploy: single-user, local-first by design.
- CodeMirror + reladraw grammar highlighting: nice, but a textarea proves the concept.
- AI generation: needs keys/LLM; separate demo.
- Upgrading past 0.8.1: language is churning fast (0.5.0 → 0.8.1, six releases, in the ~20 h before this plan).

## Validation (required)
- ≥1 screenshot of the running app: example diagram rendered + a visible inline error state.
- ≥1 short video (≤30 s): type an edit → preview updates → switch theme → save → reload → diagram restored.
- `bun test` green; `bun run dev` from a fresh clone works.
