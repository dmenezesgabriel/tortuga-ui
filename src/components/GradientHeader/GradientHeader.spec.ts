/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, beforeEach } from "vitest";
import { shallowMount, type VueWrapper } from "@vue/test-utils";
import GradientHeader from "~/components/GradientHeader/GradientHeader.vue";

let wrapper: VueWrapper;

describe("GradientHeader", () => {
  beforeEach(() => {
    // Arrange
    wrapper = shallowMount(GradientHeader as any, {
      slots: {
        title: "Title",
        subtitle: "Subtitle",
      },
    });
  });

  it("is called", () => {
    // Assert
    expect(wrapper.exists()).toBeTruthy();
  });

  it("should render", () => {
    // Assert
    expect(wrapper.find("header").exists()).toBeTruthy();
    expect(wrapper.text()).toContain("Title");
    expect(wrapper.text()).toContain("Subtitle");
  });
});
