/**
 * @vitest-environment jsdom
 */
import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import TextContent from "./TextContent";

describe("TextContent", () => {
  it("should render", () => {
    const wrapper = mount(TextContent, {
      props: {
        type: "div",
      },
      slots: {
        default: "Hello, World!",
      },
    });

    expect(wrapper.find("div").exists()).toBeTruthy();
    expect(wrapper.text()).toContain("Hello, World!");
  });
});
