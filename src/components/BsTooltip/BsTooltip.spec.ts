/**
 * @vitest-environment jsdom
 */
import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import BsTooltip from "@/components/BsTooltip/BsTooltip.vue";

describe("BsTooltip", async () => {
  it("should render", async () => {
    // Arrange
    const wrapper = mount(BsTooltip as any, {
      props: {
        options: {
          title: "This is a tooltip",
        },
      },
    });

    // Assert
    expect(wrapper.find("span").exists()).toBeTruthy();
    expect(wrapper.attributes("aria-label")).toContain("tooltip");
  });
});
