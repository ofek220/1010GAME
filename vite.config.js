import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/1010GAME/",
  plugins: [react()],
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      input: {
        main: "./index.html",
      },
      output: {
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split(".");
          const ext = info[info.length - 1];
          if (/\.(css|scss)$/.test(assetInfo.name)) {
            return `assets/styles.[ext]`;
          }
          return `assets/[name].[ext]`;
        },
      },
    },
  },
});
