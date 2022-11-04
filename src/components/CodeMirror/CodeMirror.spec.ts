/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, beforeEach } from "vitest";
import { shallowMount, VueWrapper } from "@vue/test-utils";
import CodeMirror from "~/components/CodeMirror/CodeMirror.vue";

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

let wrapper: VueWrapper;

describe("CodeMirror", () => {
  beforeEach(() => {
    // Arrange
    wrapper = shallowMount(CodeMirror as any, {
      props: {
        text: "let counter = 0;",
      },
    });
  });

  it("is called", () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it("Should render", () => {
    // Assert
    expect(wrapper.find("div").exists()).toBeTruthy();
    expect(wrapper.text()).toContain("let counter = 0;");
  });

  it("should show text", () => {
    // Assert
    expect(wrapper.text()).toContain("let counter = 0;");
  });

  it.todo("should emit change");

  it.todo("should emit update");

  it.todo("should emit focus");

  it.todo("should emit blur");

  it.todo("should emit ready");
});
