import { build } from "vite";
import react from "@vitejs/plugin-react";

(async () => {
  await build({
    root: "src/docs",
    build: { outDir: "../../docs", emptyOutDir: true },
    plugins: [react({ jsxRuntime: "classic" })]
  });
})();
