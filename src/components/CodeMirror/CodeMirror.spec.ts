/**
 * @vitest-environment jsdom
 */
import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import CodeMirror from "@/components/CodeMirror/CodeMirror.vue";

/**
 * Workaround fro "TypeError: textRange(...).getClientRects is not a function"
 * from jsdom.
 * https://github.com/jsdom/jsdom/issues/3002
 */
document.createRange = () => {
  const range = new Range();

  range.getBoundingClientRect = () => {
    return {
      x: 0,
      y: 0,
      bottom: 0,
      height: 0,
      left: 0,
      right: 0,
      top: 0,
      width: 0,
      toJSON: () => {},
    };
  };

  range.getClientRects = () => {
    return {
      item: (index) => null,
      length: 0,
      *[Symbol.iterator]() {},
    };
  };

  return range;
};

describe("CodeMirror", async () => {
  it("should render", async () => {
    // Arrange
    const wrapper = mount(CodeMirror as any, {
      props: {
        text: "let counter = 0;",
      },
    });

    // Assert
    expect(wrapper.find("div").exists()).toBeTruthy();
    expect(wrapper.text()).toContain("let counter = 0;");
  });
});
