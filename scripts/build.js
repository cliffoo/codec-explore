import { build } from "vite";

(async () => {
  await build({
    build: {
      lib: {
        entry: "src/react/index.ts",
        fileName: "react/index",
        formats: ["es"]
      },
      rollupOptions: {
        external: ["react", "react-dom"],
        output: { assetFileNames: "react/index[extname]" }
      },
      sourcemap: true,
      emptyOutDir: false
    }
  });

  await build({
    build: {
      lib: {
        entry: "src/utils/index.ts",
        fileName: "utils/index",
        formats: ["es"]
      },
      sourcemap: true,
      emptyOutDir: false
    }
  });
})();
