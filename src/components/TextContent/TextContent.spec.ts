/**
 * @vitest-environment jsdom
 */
import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import TextContent from "@/components/TextContent/TextContent";

describe("TextContent", () => {
  it("should render", () => {
    // Arrange
    const wrapper = mount(TextContent, {
      props: {
        type: "div",
      },
      slots: {
        default: "Hello, World!",
      },
    });

    // Assert
    expect(wrapper.find("div").exists()).toBeTruthy();
    expect(wrapper.text()).toContain("Hello, World!");
  });
});
