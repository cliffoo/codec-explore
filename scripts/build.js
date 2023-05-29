import { build } from "vite";
import { Extractor, ExtractorConfig } from "@microsoft/api-extractor";

(async () => {
  for (const subpath of ["react", "utils"]) {
    const config = ExtractorConfig.loadFileAndPrepare(
      `scripts/api-extractor.${subpath}.json`
    );
    const result = Extractor.invoke(config, { localBuild: true });
    if (!result.succeeded)
      throw new Error("Failed to rollup declaration files.");
  }

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
