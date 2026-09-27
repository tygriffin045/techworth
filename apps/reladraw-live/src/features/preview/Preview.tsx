import { cn } from "@/lib/utils";

/** Natural width of the SVG, so small diagrams can be scaled up a little (never past 1.5x). */
const naturalWidth = (svg: string) => Number(/<svg[^>]*\swidth="([\d.]+)"/.exec(svg)?.[1] ?? 0);

export function Preview({ svg, stale }: { svg: string; stale: boolean }) {
  const w = naturalWidth(svg);
  return (
    <div className="relative h-full overflow-auto bg-[radial-gradient(var(--border)_1px,transparent_1px)] [background-size:16px_16px]">
      {stale && svg && (
        <div className="absolute right-3 top-3 z-10 rounded-md border bg-background/90 px-2 py-1 text-xs text-muted-foreground">
          Showing last good render
        </div>
      )}
      <div className="flex min-h-full items-center justify-center p-6">
        {svg ? (
          <div
            data-testid="preview"
            className={cn(
              "rounded-lg shadow-2xl ring-1 ring-border transition-opacity overflow-hidden [&_svg]:block [&_svg]:h-auto [&_svg]:w-full",
              stale && "opacity-50",
            )}
            style={w ? { width: `min(100%, ${Math.round(w * 1.5)}px)` } : undefined}
            // reladraw's own SVG output only
            dangerouslySetInnerHTML={{ __html: svg }}
          />
        ) : (
          <p className="text-sm text-muted-foreground">Nothing to show yet.</p>
        )}
      </div>
    </div>
  );
}
