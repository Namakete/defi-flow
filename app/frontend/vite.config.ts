import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    extensions: [".js", ".ts", ".vue"],
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@app": path.resolve(__dirname, "./src/app"),
      "@config": path.resolve(__dirname, "./src/configs"),
      "@domain": path.resolve(__dirname, "./src/domains"),
      "@ui": path.resolve(__dirname, "./src/packages/ui"),
      "@package": path.resolve(__dirname, "./src/packages"),
    },
  },
});
