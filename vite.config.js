import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // Ensures assets are served correctly
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});