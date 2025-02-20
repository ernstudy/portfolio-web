import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Otras configuraciones...
  assetsInclude: ["**/*.png"],
  base: "https://ernstudy.github.io/portfolio-web/",
});
