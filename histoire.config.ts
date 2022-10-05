import { defineConfig } from "histoire";
import { HstVue } from "@histoire/plugin-vue";
import { defaultColors } from "histoire";

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
  theme: {
    colors: {
      gray: defaultColors.zinc,
      primary: defaultColors.cyan,
    },
  },
});
