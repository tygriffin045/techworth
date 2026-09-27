// Examples adapted from https://github.com/reladraw/reladraw/tree/v0.8.1/examples (Apache-2.0).
import starter from "./files/starter";
import arch from "./files/arch";
import gap from "./files/gap";
import shapes from "./files/shapes";
import icons from "./files/icons";
import regions from "./files/regions";

export const EXAMPLES: { id: string; label: string; source: string }[] = [
  { id: "starter", label: "Starter", source: starter },
  { id: "arch", label: "Architecture (from draw.io)", source: arch },
  { id: "gap", label: "Where reladraw sits", source: gap },
  { id: "shapes", label: "Shapes", source: shapes },
  { id: "icons", label: "Icons", source: icons },
  { id: "regions", label: "Regions", source: regions },
];
