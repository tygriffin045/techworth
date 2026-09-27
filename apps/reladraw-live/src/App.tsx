import { useCallback, useEffect, useState } from "react";
import { Copy, Download, FilePlus2, Save } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Toaster } from "@/components/ui/sonner";
import { diagramsApi } from "@/features/diagrams/api";
import { DiagramList } from "@/features/diagrams/DiagramList";
import type { DiagramSummary } from "@/features/diagrams/store";
import { THEME_OPTIONS } from "@/features/editor/compile";
import { Editor } from "@/features/editor/Editor";
import { useCompile } from "@/features/editor/useCompile";
import { EXAMPLES } from "@/features/examples/examples";
import { downloadSvg } from "@/features/preview/download";
import { Preview } from "@/features/preview/Preview";

const LAST_KEY = "reladraw-live:last-opened";
const starter = EXAMPLES[0]!;

export function App() {
  const [source, setSource] = useState(starter.source);
  const [theme, setTheme] = useState<string>("file");
  const [name, setName] = useState("Untitled");
  const [currentId, setCurrentId] = useState<number | null>(null);
  const [saved, setSaved] = useState<DiagramSummary[]>([]);
  const [busy, setBusy] = useState(false);
  const { svg, error } = useCompile(source, theme);

  const refresh = useCallback(() => diagramsApi.list().then(setSaved), []);

  const open = useCallback(async (id: number) => {
    try {
      const d = await diagramsApi.get(id);
      setSource(d.source);
      setTheme(d.theme);
      setName(d.name);
      setCurrentId(d.id);
      localStorage.setItem(LAST_KEY, String(d.id));
    } catch {
      localStorage.removeItem(LAST_KEY);
    }
  }, []);

  // Restore the last-opened diagram on load.
  useEffect(() => {
    refresh().catch(() => toast.error("Could not load saved diagrams"));
    const last = Number(localStorage.getItem(LAST_KEY));
    if (last) open(last);
  }, [refresh, open]);

  const save = useCallback(
    async (asNew = false) => {
      setBusy(true);
      try {
        const input = { name: name.trim() || "Untitled", source, theme };
        const d =
          currentId !== null && !asNew
            ? await diagramsApi.update(currentId, input)
            : await diagramsApi.create(
                asNew && currentId !== null ? { ...input, name: `${input.name} copy` } : input,
              );
        setCurrentId(d.id);
        setName(d.name);
        localStorage.setItem(LAST_KEY, String(d.id));
        await refresh();
        toast.success(`Saved “${d.name}”`);
      } catch (e) {
        toast.error(`Save failed: ${(e as Error).message}`);
      } finally {
        setBusy(false);
      }
    },
    [currentId, name, source, theme, refresh],
  );

  // Ctrl/Cmd+S saves.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "s") {
        e.preventDefault();
        save();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [save]);

  const remove = async (id: number) => {
    await diagramsApi.remove(id);
    if (id === currentId) {
      setCurrentId(null);
      localStorage.removeItem(LAST_KEY);
    }
    await refresh();
    toast("Diagram deleted");
  };

  const loadExample = (id: string) => {
    const ex = EXAMPLES.find((e) => e.id === id);
    if (!ex) return;
    setSource(ex.source);
    setName(ex.label);
    setCurrentId(null);
    localStorage.removeItem(LAST_KEY);
  };

  return (
    <div className="flex h-screen flex-col bg-background text-foreground">
      <header className="flex flex-wrap items-center gap-2 border-b px-4 py-2">
        <div className="mr-2 flex items-baseline gap-2">
          <h1 className="text-base font-semibold tracking-tight">Reladraw Live</h1>
          <span className="text-xs text-muted-foreground">reladraw 0.8.1</span>
        </div>

        <Select onValueChange={loadExample}>
          <SelectTrigger size="sm" className="w-44" aria-label="Load example" data-testid="examples">
            <SelectValue placeholder="Load example…" />
          </SelectTrigger>
          <SelectContent>
            {EXAMPLES.map((e) => (
              <SelectItem key={e.id} value={e.id}>
                {e.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={theme} onValueChange={setTheme}>
          <SelectTrigger size="sm" className="w-48" aria-label="Theme" data-testid="theme">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {THEME_OPTIONS.map((t) => (
              <SelectItem key={t} value={t}>
                {t === "file" ? "Theme: from file" : `Theme: ${t}`}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <div className="ml-auto flex items-center gap-2">
          <Input
            aria-label="Diagram name"
            data-testid="name"
            className="h-8 w-48"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Button size="sm" onClick={() => save()} disabled={busy} data-testid="save">
            <Save /> Save
          </Button>
          <Button size="sm" variant="outline" onClick={() => save(true)} disabled={busy}>
            <FilePlus2 /> Save as
          </Button>
          <Button size="sm" variant="outline" disabled={!svg} onClick={() => downloadSvg(svg, name)}>
            <Download /> SVG
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() =>
              navigator.clipboard.writeText(source).then(
                () => toast.success("Source copied"),
                () => toast.error("Clipboard unavailable"),
              )
            }
          >
            <Copy /> Copy
          </Button>
        </div>
      </header>

      <div className="flex min-h-0 flex-1">
        <DiagramList items={saved} currentId={currentId} onOpen={open} onDelete={remove} />
        <ResizablePanelGroup orientation="horizontal" className="min-w-0 flex-1">
          <ResizablePanel defaultSize="40" minSize="20">
            <Editor value={source} onChange={setSource} error={error} />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize="60" minSize="20">
            <Preview svg={svg} stale={error !== null} />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
      <Toaster position="bottom-right" />
    </div>
  );
}

export default App;
