/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, beforeEach } from "vitest";
import { shallowMount, type VueWrapper } from "@vue/test-utils";
import BsTooltip from "@/components/BsTooltip/BsTooltip.vue";
import { nextTick } from "vue";

let wrapper: VueWrapper;

describe("BsTooltip", () => {
  beforeEach(() => {
    // Arrange
    wrapper = shallowMount(BsTooltip as any, {
      props: {
        type: "span",
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

  it("should render", async () => {
    // Assert
    await nextTick();
    expect(wrapper.find("span").exists()).toBeTruthy();
    expect(wrapper.attributes("aria-label")).toContain("tooltip");
    expect(wrapper.attributes("tabindex")).toContain(0);
  });
});
