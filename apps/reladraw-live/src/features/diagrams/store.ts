import { Database } from "bun:sqlite";

export interface Diagram {
  id: number;
  name: string;
  source: string;
  theme: string;
  createdAt: string;
  updatedAt: string;
}
export type DiagramSummary = Pick<Diagram, "id" | "name" | "updatedAt">;
export type DiagramInput = { name: string; source: string; theme?: string };

const COLUMNS = `id, name, source, theme, created_at AS createdAt, updated_at AS updatedAt`;

/** A tiny CRUD store for saved diagrams. Pass ":memory:" in tests. */
export function createStore(path: string) {
  const db = new Database(path, { create: true, strict: true });
  db.run("PRAGMA journal_mode = WAL");
  db.run(`CREATE TABLE IF NOT EXISTS diagrams (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    source TEXT NOT NULL,
    theme TEXT NOT NULL DEFAULT 'file',
    created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now')),
    updated_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now'))
  )`);

  const clean = (name: string) => {
    const n = name.trim();
    if (!n) throw new Error("name is required");
    return n.slice(0, 120);
  };

  return {
    list(): DiagramSummary[] {
      return db
        .query(`SELECT id, name, updated_at AS updatedAt FROM diagrams ORDER BY updated_at DESC, id DESC`)
        .all() as DiagramSummary[];
    },
    get(id: number): Diagram | null {
      return (db.query(`SELECT ${COLUMNS} FROM diagrams WHERE id = ?`).get(id) as Diagram | null) ?? null;
    },
    create(input: DiagramInput): Diagram {
      return db
        .query(`INSERT INTO diagrams (name, source, theme) VALUES (?, ?, ?) RETURNING ${COLUMNS}`)
        .get(clean(input.name), input.source, input.theme ?? "file") as Diagram;
    },
    update(id: number, input: Partial<DiagramInput>): Diagram | null {
      const cur = this.get(id);
      if (!cur) return null;
      return db
        .query(
          `UPDATE diagrams SET name = ?, source = ?, theme = ?,
             updated_at = strftime('%Y-%m-%dT%H:%M:%fZ','now')
           WHERE id = ? RETURNING ${COLUMNS}`,
        )
        .get(
          input.name !== undefined ? clean(input.name) : cur.name,
          input.source ?? cur.source,
          input.theme ?? cur.theme,
          id,
        ) as Diagram;
    },
    remove(id: number): boolean {
      return db.query(`DELETE FROM diagrams WHERE id = ?`).run(id).changes > 0;
    },
    close() {
      db.close();
    },
  };
}
export type Store = ReturnType<typeof createStore>;
