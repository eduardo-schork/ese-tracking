import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["src/main.ts"],
    outDir: "dist",
    target: "node18",
    format: ["cjs"],
    clean: true,
    dts: false,
    sourcemap: false,
    resolveAlias: {
        "@": "./src",
    },
});
