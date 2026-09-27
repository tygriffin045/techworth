import { beforeEach, describe, expect, test } from "bun:test";
import { createStore, type Store } from "./store";

let store: Store;
beforeEach(() => {
  store = createStore(":memory:");
});

describe("diagram store", () => {
  test("create then get round-trips source and theme", () => {
    const d = store.create({ name: "  Arch  ", source: 'node a "A"', theme: "nord" });
    expect(d.name).toBe("Arch");
    expect(store.get(d.id)).toEqual(d);
  });

  test("theme defaults to 'file'", () => {
    expect(store.create({ name: "x", source: "" }).theme).toBe("file");
  });

  test("list returns summaries, most recently updated first", async () => {
    const a = store.create({ name: "a", source: "1" });
    const b = store.create({ name: "b", source: "2" });
    await Bun.sleep(5);
    store.update(a.id, { source: "1b" });
    expect(store.list().map((d) => d.id)).toEqual([a.id, b.id]);
    expect(Object.keys(store.list()[0]!).sort()).toEqual(["id", "name", "updatedAt"]);
  });

  test("update changes only given fields; missing id returns null", () => {
    const d = store.create({ name: "a", source: "old", theme: "dark" });
    const u = store.update(d.id, { source: "new" })!;
    expect([u.name, u.source, u.theme]).toEqual(["a", "new", "dark"]);
    expect(store.update(999, { source: "x" })).toBeNull();
  });

  test("remove deletes; get of missing id is null", () => {
    const d = store.create({ name: "a", source: "" });
    expect(store.remove(d.id)).toBe(true);
    expect(store.remove(d.id)).toBe(false);
    expect(store.get(d.id)).toBeNull();
  });

  test("blank names are rejected", () => {
    expect(() => store.create({ name: "   ", source: "" })).toThrow("name is required");
  });

  test("data persists across reopen of a file database", () => {
    const path = `/tmp/reladraw-live-test-${crypto.randomUUID()}.sqlite`;
    const s1 = createStore(path);
    const d = s1.create({ name: "kept", source: 'node a "A"' });
    s1.close();
    const s2 = createStore(path);
    expect(s2.get(d.id)?.name).toBe("kept");
    s2.close();
  });
});
