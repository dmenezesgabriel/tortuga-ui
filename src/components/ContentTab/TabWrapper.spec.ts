/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, beforeEach } from "vitest";
import { mount, VueWrapper } from "@vue/test-utils";
import TabsWrapper from "@/components/ContentTab/TabsWrapper.vue";
import TabContent from "@/components/ContentTab/TabContent.vue";
import { h } from "vue";

let wrapper: VueWrapper;

describe("TabWrapper", async () => {
  beforeEach(() => {
    // Arrange
    wrapper = mount(TabsWrapper as any, {
      slots: {
        default: () => [
          h(TabContent, { title: "Tab 1" }, () => ["Tab 1 Content"]),
          h(TabContent, { title: "Tab 2" }, () => ["Tab 2 Content"]),
          h(TabContent, { title: "Tab 3" }, () => ["Tab 3 Content"]),
        ],
      },
    });
  });

  it("is called", () => {
    // Assert
    expect(wrapper.exists()).toBeTruthy();
  });

  it("Should render", () => {
    // Assert
    expect(wrapper.find("div").exists()).toBeTruthy();
    expect(wrapper.text()).toContain("Tab 1");
    expect(wrapper.text()).toContain("Tab 2");
    expect(wrapper.text()).toContain("Tab 3");
  });

  it.each([[1], [2], [3]])("Should render tab components", (tabNumber) => {
    const tabWrapper = wrapper
      .findAll(".tab-content")
      .filter((node) => node.text().match(`Tab ${tabNumber} Content`))
      .at(0);

    expect(tabWrapper?.exists());
  });
});
