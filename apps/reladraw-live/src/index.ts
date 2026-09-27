import { serve } from "bun";
import index from "./index.html";
import { diagramRoutes } from "./features/diagrams/routes";

const server = serve({
  port: Number(process.env.PORT ?? 3000),
  routes: {
    ...diagramRoutes(),
    "/api/*": Response.json({ error: "not found" }, { status: 404 }),
    "/*": index,
  },
  development: process.env.NODE_ENV !== "production" && {
    hmr: true,
    console: true,
  },
});

console.log(`Reladraw Live running at ${server.url}`);
