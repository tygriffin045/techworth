import { describe, expect, test } from "bun:test";
import { THEMES } from "reladraw";
import { compileSource } from "./compile";

const valid = `node app "Web app"\nnode db "Database" right of app`;

describe("compileSource", () => {
  test("valid source returns an SVG", () => {
    const r = compileSource(valid);
    expect(r.ok).toBe(true);
    if (r.ok) expect(r.svg.startsWith("<svg")).toBe(true);
  });

  test("source error returns its line and message", () => {
    const r = compileSource(`node x "a"\nnode x "b"`);
    expect(r).toEqual({ ok: false, error: { line: 2, message: expect.stringContaining("declared twice") } });
  });

  test("unknown statement is reported, not thrown", () => {
    const r = compileSource(`nod x`);
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.error.line).toBe(1);
  });

  test("theme override changes the page color", () => {
    const r = compileSource(valid, "nord");
    expect(r.ok && r.svg.includes(THEMES.nord!.background)).toBe(true);
  });

  test("'file' and unknown theme names fall back to the file's theme", () => {
    const base = compileSource(valid);
    expect(compileSource(valid, "file")).toEqual(base);
    expect(compileSource(valid, "no-such-theme")).toEqual(base);
  });
});
