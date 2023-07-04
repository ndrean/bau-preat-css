import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig(({ command, mode, ssrBuild }) => {
  return {
    build: {
      lib: {
        entry: resolve(__dirname, "bau-preactcss.js"),
        name: "BauPreactCss",
        fileName: "bau-preactcss.js",
      },
    },
    server: {
      open: true,
    },
  };
});
