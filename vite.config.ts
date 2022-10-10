import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/

export default defineConfig(() => {
  return {
    plugins: [
      vue({
        reactivityTransform: true,
      }),
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    build: {
      lib: {
        entry: path.resolve(__dirname, "src/index.ts"),
        name: "vbc-ui",
        fileName: (format) => `vbc-ui.${format}.js`,
      },
      rollupOptions: {
        external: ["vue"],
        output: {
          globals: {
            vue: "Vue",
          },
        },
      },
    },
  };
});
