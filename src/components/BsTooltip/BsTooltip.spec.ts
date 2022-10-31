/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, beforeEach } from "vitest";
import { shallowMount, type VueWrapper } from "@vue/test-utils";
import BsTooltip from "@/components/BsTooltip/BsTooltip";

let wrapper: VueWrapper;

describe("BsTooltip", () => {
  beforeEach(() => {
    // Arrange
    wrapper = shallowMount(BsTooltip as any, {
      props: {
        options: {
          title: "This is a tooltip",
        },
      },
    });
  });

  it("is called", () => {
    // Assert
    expect(wrapper.exists()).toBeTruthy();
  });

  it("should render", () => {
    // Assert
    expect(wrapper.find("span").exists()).toBeTruthy();
    expect(wrapper.attributes("aria-label")).toContain("tooltip");
    expect(wrapper.attributes("tabindex")).toContain(0);
  });
});
