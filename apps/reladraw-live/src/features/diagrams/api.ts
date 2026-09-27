import type { Diagram, DiagramInput, DiagramSummary } from "./store";

async function call<T>(url: string, init?: RequestInit): Promise<T> {
  const res = await fetch(url, {
    ...init,
    headers: init?.body ? { "content-type": "application/json" } : undefined,
  });
  if (!res.ok) {
    const body = (await res.json().catch(() => ({}))) as { error?: string };
    throw new Error(body.error ?? `HTTP ${res.status}`);
  }
  return (res.status === 204 ? undefined : await res.json()) as T;
}

export const diagramsApi = {
  list: () => call<DiagramSummary[]>("/api/diagrams"),
  get: (id: number) => call<Diagram>(`/api/diagrams/${id}`),
  create: (input: DiagramInput) =>
    call<Diagram>("/api/diagrams", { method: "POST", body: JSON.stringify(input) }),
  update: (id: number, input: Partial<DiagramInput>) =>
    call<Diagram>(`/api/diagrams/${id}`, { method: "PUT", body: JSON.stringify(input) }),
  remove: (id: number) => call<void>(`/api/diagrams/${id}`, { method: "DELETE" }),
};
