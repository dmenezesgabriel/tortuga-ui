/**
 * @vitest-environment jsdom
 */
import { h } from "vue";
import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import ComponentTabWrapper from "@/components/ComponentTab/ComponentTabWrapper.vue";

describe("ComponentTabWrapper", async () => {
  it("Should render", async () => {
    // Arrange
    const wrapper = mount(ComponentTabWrapper as any, {
      props: {
        currentTab: "FirstTab",
        tabs: {
          FirstTab: h("div", { type: "p" }, "First Component"),
          SecondTab: h("div", { type: "p" }, "Second Component"),
          ThirdTab: h("div", { type: "p" }, "Third Component"),
        },
      },
    });

    // Assert
    expect(wrapper.find("div").exists()).toBeTruthy();
  });
});
