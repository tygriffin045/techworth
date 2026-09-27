import { compile, SourceError, THEMES, THEME_NAMES } from "reladraw";

export type CompileResult =
  { ok: true; svg: string } | { ok: false; error: { line: number | null; message: string } };

/** Theme names offered in the UI; "file" means "use whatever the source says". */
export const THEME_OPTIONS = ["file", ...THEME_NAMES] as const;

/**
 * Source text in, SVG or a readable error out. Never throws.
 * `themeName` overrides the file's own `diagram theme:` unless it is "file"/undefined.
 */
export function compileSource(source: string, themeName?: string): CompileResult {
  const theme = themeName && themeName !== "file" ? THEMES[themeName] : undefined;
  try {
    return { ok: true, svg: compile(source, theme ? { theme } : {}) };
  } catch (err) {
    if (err instanceof SourceError) {
      return { ok: false, error: { line: err.line, message: err.message } };
    }
    const message = err instanceof Error ? err.message : String(err);
    return { ok: false, error: { line: null, message: `Unexpected error: ${message}` } };
  }
}
