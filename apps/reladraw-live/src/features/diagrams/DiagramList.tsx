import { FileText, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { DiagramSummary } from "./store";

interface Props {
  items: DiagramSummary[];
  currentId: number | null;
  onOpen: (id: number) => void;
  onDelete: (id: number) => void;
}

export function DiagramList({ items, currentId, onOpen, onDelete }: Props) {
  return (
    <aside className="flex w-56 shrink-0 flex-col border-r bg-muted/20">
      <div className="px-3 pb-2 pt-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">
        Saved diagrams
      </div>
      <ul className="flex-1 overflow-auto px-2 pb-2" data-testid="diagram-list">
        {items.length === 0 && (
          <li className="px-2 py-1 text-sm text-muted-foreground">None yet. Press Save.</li>
        )}
        {items.map((d) => (
          <li key={d.id} className="group flex items-center">
            <button
              type="button"
              onClick={() => onOpen(d.id)}
              className={cn(
                "flex min-w-0 flex-1 items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm hover:bg-accent",
                d.id === currentId && "bg-accent font-medium",
              )}
            >
              <FileText className="size-4 shrink-0 text-muted-foreground" />
              <span className="truncate">{d.name}</span>
            </button>
            <Button
              variant="ghost"
              size="icon-sm"
              aria-label={`Delete ${d.name}`}
              className="size-7 opacity-0 group-hover:opacity-100"
              onClick={() => onDelete(d.id)}
            >
              <Trash2 className="size-3.5" />
            </Button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
