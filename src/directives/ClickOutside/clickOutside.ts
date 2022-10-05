import type { VNode } from "vue";

export default {
  //  TODO check typing
  beforeMount: function (element: HTMLElement, binding: any, vnode: VNode) {
    binding.event = function (event: any) {
      if (!(element === event.target || element.contains(event.target))) {
        if (binding.value instanceof Function) {
          binding.value(event);
        }
      }
    };
    document.body.addEventListener("click", binding.event);
  },
  //  TODO check typing
  unmounted: function (element: HTMLElement, binding: any, vnode: VNode) {
    document.body.removeEventListener("click", binding.event);
  },
};
