import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // cleaner alias path
    },
  },
  server: {
    host: "0.0.0.0",
    port: 5173,
    strictPort: false,
    open: false,
    hmr: {
      protocol: "ws",
      host: "localhost",
    },
  },
});
