import { defineConfig } from "histoire";
import { HstVue } from "@histoire/plugin-vue";

export default defineConfig({
  setupFile: "./histoire.setup.ts",
  plugins: [HstVue()],
  tree: {
    groups: [
      {
        id: "top",
        title: "", // No Toggle
        include: (file) => true,
      },
      {
        id: "components",
        title: "Components",
        include: (file) => true,
      },
    ],
  },
});
