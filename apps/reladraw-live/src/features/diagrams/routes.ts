import { mkdirSync } from "node:fs";
import { dirname } from "node:path";
import { createStore, type DiagramInput, type Store } from "./store";

const bad = (message: string, status = 400) => Response.json({ error: message }, { status });

async function readInput(req: Request): Promise<Partial<DiagramInput> | null> {
  try {
    const body = (await req.json()) as Record<string, unknown>;
    const out: Partial<DiagramInput> = {};
    if (typeof body.name === "string") out.name = body.name;
    if (typeof body.source === "string") out.source = body.source;
    if (typeof body.theme === "string") out.theme = body.theme;
    return out;
  } catch {
    return null;
  }
}

/** Bun.serve route table for /api/diagrams, backed by a SQLite file. */
export function diagramRoutes(dbPath = process.env.DB_PATH ?? "data/diagrams.sqlite") {
  if (dbPath !== ":memory:") mkdirSync(dirname(dbPath), { recursive: true });
  const store: Store = createStore(dbPath);
  const idOf = (raw: string) => (/^\d+$/.test(raw) ? Number(raw) : null);

  return {
    "/api/diagrams": {
      GET: () => Response.json(store.list()),
      POST: async (req: Request) => {
        const input = await readInput(req);
        if (!input?.name?.trim() || input.source === undefined) return bad("name and source are required");
        return Response.json(store.create(input as DiagramInput), { status: 201 });
      },
    },
    "/api/diagrams/:id": {
      GET: (req: Bun.BunRequest<"/api/diagrams/:id">) => {
        const id = idOf(req.params.id);
        const d = id === null ? null : store.get(id);
        return d ? Response.json(d) : bad("not found", 404);
      },
      PUT: async (req: Bun.BunRequest<"/api/diagrams/:id">) => {
        const id = idOf(req.params.id);
        const input = await readInput(req);
        if (id === null || !input) return bad("invalid request");
        if (input.name !== undefined && !input.name.trim()) return bad("name is required");
        const d = store.update(id, input);
        return d ? Response.json(d) : bad("not found", 404);
      },
      DELETE: (req: Bun.BunRequest<"/api/diagrams/:id">) => {
        const id = idOf(req.params.id);
        return id !== null && store.remove(id) ? new Response(null, { status: 204 }) : bad("not found", 404);
      },
    },
  };
}
