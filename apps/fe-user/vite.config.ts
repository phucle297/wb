import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@ui": resolve(__dirname, "../../packages/ui/src"),
      "@wb/ui/src": resolve(__dirname, "../../packages/ui/src"),
      "@wb/common": resolve(__dirname, "../../packages/common"),
    },
  },
});
