import { mergeConfig } from "vite";
import { fileURLToPath, URL } from "url";
import { defineConfig, configDefaults } from "vitest/config";
import viteConfig from "./vite.config";
import vue from "@vitejs/plugin-vue";

export default mergeConfig(
  viteConfig,
  defineConfig({
    plugins: [vue()],
    test: {
      globals: true,
      exclude: [...configDefaults.exclude],
      setupFiles: ["./vitest.setup.ts"],
      environment: "jsdom",
    },
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    root: ".",
  })
);
