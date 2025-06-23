import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import svgLoader from "vite-svg-loader";

import ViteCompression from "vite-plugin-compression";

export default defineConfig({
  plugins: [
    vue(),
    svgLoader(),
    ViteCompression({
      ext: ".gz",
      algorithm: "gzip",
      threshold: 10240,
      compressionOptions: { level: 6 },
    }),
    ViteCompression({
      ext: ".br",
      algorithm: "brotliCompress",
      threshold: 10240,
      compressionOptions: { level: 11 },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  esbuild: {
    target: "es2015",
    drop: ["console", "debugger"],
  },

  build: {
    minify: "esbuild",
    target: "es2015",
  },
});
