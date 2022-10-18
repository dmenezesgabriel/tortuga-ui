import "../src/assets/scss/index.scss";
import "bootstrap/js/dist/alert";
import "bootstrap/js/dist/base-component";
import "bootstrap/js/dist/button";
// import "bootstrap/js/dist/carousel";
import "bootstrap/js/dist/collapse";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/modal";
import "bootstrap/js/dist/offcanvas"; // sidebar, depends on modal
import "bootstrap/js/dist/popover";
// import "bootstrap/js/dist/scrollspy";
// import "bootstrap/js/dist/tab";
import "bootstrap/js/dist/toast";
import { useTheme } from "./useTheme";

/**
 * Global parameters
 */
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    values: [
      { name: "white", value: "#fff" },
      { name: "dark", value: "#1e293b" },
      { name: "dark-alt", value: "#334155" },
    ],
  },
  layout: "fullscreen",
};

/**
 * Global Theme toggle for components
 */
export const globalTypes = {
  theme: {
    name: "Toggle Theme",
    description: "Global theme for components",
    defaultValue: "light",
    toolbar: {
      icon: "contrast",
      items: ["light", "dark"],
      showName: true,
      dynamicTitle: true,
    },
  },
};

/**
 * Global decorators
 */
export const decorators = [useTheme];
