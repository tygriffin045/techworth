import { useEffect, useRef, useState } from "react";
import { compileSource, type CompileResult } from "./compile";

/** Debounced live compile that remembers the last successful SVG. */
export function useCompile(source: string, theme: string, delay = 150) {
  const [result, setResult] = useState<CompileResult>(() => compileSource(source, theme));
  const lastGood = useRef<string>(result.ok ? result.svg : "");

  useEffect(() => {
    const t = setTimeout(() => setResult(compileSource(source, theme)), delay);
    return () => clearTimeout(t);
  }, [source, theme, delay]);

  if (result.ok) lastGood.current = result.svg;
  return { svg: lastGood.current, error: result.ok ? null : result.error };
}
