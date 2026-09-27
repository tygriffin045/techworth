import { useRef } from "react";
import { AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  value: string;
  onChange: (value: string) => void;
  error: { line: number | null; message: string } | null;
}

export function Editor({ value, onChange, error }: Props) {
  const gutter = useRef<HTMLDivElement>(null);
  const lineCount = value.split("\n").length;

  return (
    <div className="flex h-full flex-col">
      <div className="flex min-h-0 flex-1 font-mono text-[13px] leading-5">
        <div
          ref={gutter}
          aria-hidden
          className="select-none overflow-hidden border-r bg-muted/30 py-3 text-right text-muted-foreground/60"
        >
          {Array.from({ length: lineCount }, (_, i) => (
            <div
              key={i}
              className={cn(
                "px-3",
                error?.line === i + 1 && "bg-destructive/25 font-semibold text-destructive",
              )}
            >
              {i + 1}
            </div>
          ))}
        </div>
        <textarea
          aria-label="reladraw source"
          data-testid="editor"
          className="min-w-0 flex-1 resize-none whitespace-pre bg-transparent px-3 py-3 outline-none"
          spellCheck={false}
          wrap="off"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onScroll={(e) => {
            if (gutter.current) gutter.current.scrollTop = e.currentTarget.scrollTop;
          }}
        />
      </div>
      {error && (
        <div
          role="alert"
          data-testid="compile-error"
          className="flex items-start gap-2 border-t border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive"
        >
          <AlertCircle className="mt-0.5 size-4 shrink-0" />
          <span className="font-mono">
            {error.line !== null && <strong>Line {error.line}: </strong>}
            {error.message}
          </span>
        </div>
      )}
    </div>
  );
}
