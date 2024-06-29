import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/react-ts-portfolio/",
  plugins: [react()],
  build: {
    outDir: "dist",
  },
});
