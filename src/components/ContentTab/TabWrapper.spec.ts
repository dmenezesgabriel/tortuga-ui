/**
 * @vitest-environment jsdom
 */
import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import TabsWrapper from "@/components/ContentTab/TabsWrapper.vue";
import TabContent from "@/components/ContentTab/TabContent.vue";
import { h } from "vue";

describe("TabWrapper", async () => {
  it("Should render", async () => {
    // Arrange
    const wrapper = mount(TabsWrapper as any, {
      slots: {
        default: () => [
          h(TabContent, { title: "Tab 1" }, () => ["Tab 1 Content"]),
          h(TabContent, { title: "Tab 2" }, () => ["Tab 2 Content"]),
          h(TabContent, { title: "Tab 3" }, () => ["Tab 3 Content"]),
        ],
      },
    });

    // Assert
    expect(wrapper.find("div").exists()).toBeTruthy();
  });
});
