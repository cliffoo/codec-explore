import { build } from "esbuild";
import { sassPlugin, postcssModules } from "esbuild-sass-plugin";

const baseOptions = {
  bundle: true,
  minify: true,
  sourcemap: "linked",
  format: "esm",
  logLevel: "info"
};

(async () => {
  await build({
    ...baseOptions,
    entryPoints: ["src/react/index.ts"],
    outfile: "dist/react/index.js",
    external: ["react"],
    plugins: [
      sassPlugin({
        transform: postcssModules({
          generateScopedName: "truffle-codec-components-[hash:base64:8]-[local]"
        })
      })
    ]
  });

  await build({
    ...baseOptions,
    entryPoints: ["src/utils/index.ts"],
    outfile: "dist/utils/index.js"
  });
})();
