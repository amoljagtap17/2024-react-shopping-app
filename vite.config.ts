import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
    outDir: "dist",
    sourcemap: false,
    minify: "esbuild",
    cssCodeSplit: true,
    chunkSizeWarningLimit: 200,
  },
  server: {
    port: 3000,
    strictPort: true,
    host: "127.0.0.1",
    open: false,
    https: false,
  },
  preview: {
    port: 3000,
    strictPort: true,
    host: "127.0.0.1",
    open: false,
    https: false,
  },
});
