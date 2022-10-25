/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, beforeEach } from "vitest";
import { mount, type VueWrapper } from "@vue/test-utils";
import TabsWrapper from "@/components/ContentTab/TabsWrapper.vue";
import TabContent from "@/components/ContentTab/TabContent.vue";
import { h, nextTick } from "vue";

let wrapper: VueWrapper;

describe("TabWrapper", () => {
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

  it("should render", () => {
    // Assert
    expect(wrapper.find("div").exists()).toBeTruthy();
    expect(wrapper.text()).toContain("Tab 1");
    expect(wrapper.text()).toContain("Tab 2");
    expect(wrapper.text()).toContain("Tab 3");
  });

  it.each([[1], [2], [3]])("should render tab components", (tabNumber) => {
    const tabWrapper = wrapper
      .findAll(".tab-content")
      .filter((node) => node.text().match(`Tab ${tabNumber} Content`))
      .at(0);

    expect(tabWrapper?.exists());
  });

  it("should emit tab click", () => {
    // Act
    wrapper.find("li").trigger("click");

    // Assert
    expect(wrapper.emitted()).toHaveProperty("tab-click");

    // Arrange
    const clickEvent = wrapper.emitted("tab-click");

    // Assert
    expect(clickEvent?.[0]).toEqual(["Tab 1"]);
  });

  it("should change tab on click", async () => {
    // Arrange
    const buttonFirstTab = wrapper
      .findAll("li")
      .filter((node) => node.text().match("Tab 1"))
      .at(0);

    // Assert
    expect(buttonFirstTab?.classes()).toContain("selected");

    // Assert
    expect(wrapper.text()).toContain("Tab 2");

    // Arrange
    const buttonSecondTab = wrapper
      .findAll("li")
      .filter((node) => node.text().match("Tab 2"))
      .at(0);

    // Act
    buttonSecondTab?.trigger("click");
    await nextTick();

    // Assert
    expect(buttonSecondTab?.classes()).toContain("selected");

    // Arrange
    const secondTab = wrapper
      .findAll(".tab-content")
      .filter((node) => node.text().match("Tab 2 content"))
      .at(0);

    // Act
    expect(secondTab?.exists());
  });
});
