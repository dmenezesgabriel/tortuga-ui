/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, beforeEach } from "vitest";
import { shallowMount, type VueWrapper } from "@vue/test-utils";
import MarkdownText from "~/components/MarkdownText/MarkdownText.vue";

let wrapper: VueWrapper;

describe("MarkdownText", () => {
  beforeEach(() => {
    // Arrange
    wrapper = shallowMount(MarkdownText as any, {
      props: {
        markdown: "# Hello, World!",
      },
    });
  });

  it("is called", () => {
    // Assert
    expect(wrapper.exists()).toBeTruthy();
  });

  it("should render", () => {
    // Assert
    expect(wrapper.find("div").exists()).toBeTruthy();
    expect(wrapper.find("h1").exists()).toBeTruthy();
    expect(wrapper.text()).toContain("Hello, World!");
  });
});
