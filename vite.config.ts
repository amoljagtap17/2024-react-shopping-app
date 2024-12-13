import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
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
