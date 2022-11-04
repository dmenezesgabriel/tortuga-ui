import "~/assets/scss/index.scss";
import "bootstrap/js/dist/alert";
import "bootstrap/js/dist/base-component";
import "bootstrap/js/dist/button";
import "bootstrap/js/dist/carousel";
import "bootstrap/js/dist/collapse";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/modal";
import "bootstrap/js/dist/offcanvas"; // sidebar, depends on modal
import "bootstrap/js/dist/popover";
import "bootstrap/js/dist/scrollspy";
import "bootstrap/js/dist/tab";
import "bootstrap/js/dist/toast";

// Usage
// Export all Vue components
// Import { Component } from "vbc-ui";
export * from "~/components";
// Or
import * as components from "~/components";
// Import VbcComponents from "vbc-ui";
// ...
// createApp(App).use(VbcComponents).mount(#app);
const componentsList: any = components;
// Use as Plugin registering components globally
// This makes imports sometimes unclear.
const VBCComponents = {
  install(Vue: any) {
    Object.keys(componentsList).forEach((name) => {
      Vue.component(name, componentsList[name]);
    });
  },
};

export { VBCComponents };
