import { h } from "vue";

const ScrollCue = () => {
  const arrow = h("div", { class: "arrow" }, [h("span"), h("span"), h("span")]);

  return h("div", { class: "arrow-wrapper" }, [arrow]);
};

export default ScrollCue;
