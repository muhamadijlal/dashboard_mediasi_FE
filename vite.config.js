import { defineConfig } from "vite";
import dotenv from "dotenv";
import react from "@vitejs/plugin-react";
import path from "path";

dotenv.config();

export default defineConfig({
  plugins: [react()],
  define: {
    env: process.env,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@pages": path.resolve(__dirname, "./src/components/pages"),
      "@atoms": path.resolve(__dirname, "./src/components/atoms"),
      "@molecules": path.resolve(__dirname, "./src/components/molecules"),
      "@templates": path.resolve(__dirname, "./src/components/templates"),
      "@organisms": path.resolve(__dirname, "./src/components/organisms"),
    },
  },
});
