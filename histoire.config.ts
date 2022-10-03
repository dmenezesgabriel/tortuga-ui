import { defineConfig } from "histoire";
import { HstVue } from "@histoire/plugin-vue";

export default defineConfig({
  setupFile: "./histoire.setup.ts",
  plugins: [HstVue()],
  tree: {
    groups: [
      {
        id: "animations",
        title: "Animations",
        include: (file) => true,
      },
      {
        id: "buttons",
        title: "Buttons",
        include: (file) => true,
      },
      {
        id: "charts",
        title: "Charts",
        include: (file) => true,
      },
      {
        id: "text",
        title: "Text",
        include: (file) => true,
      },
    ],
  },
});
