import { defineConfig } from "histoire";
import { HstVue } from "@histoire/plugin-vue";

export default defineConfig({
  setupFile: "./histoire.setup.ts",
  plugins: [HstVue()],
  tree: {
    groups: [
      {
        id: "components",
        title: "Components",
        include: (file) => true,
      },
    ],
  },
});
