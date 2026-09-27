export function downloadSvg(svg: string, name: string) {
  const file = `${
    name
      .trim()
      .replace(/[^\w.-]+/g, "-")
      .replace(/^-|-$/g, "") || "diagram"
  }.svg`;
  const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
  const a = Object.assign(document.createElement("a"), { href: url, download: file });
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
