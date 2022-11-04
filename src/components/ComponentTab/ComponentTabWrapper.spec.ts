/**
 * @vitest-environment jsdom
 */
import { h, nextTick } from "vue";
import { describe, it, expect, beforeEach } from "vitest";
import { mount, VueWrapper } from "@vue/test-utils";
import ComponentTabWrapper from "~/components/ComponentTab/ComponentTabWrapper.vue";

let wrapper: VueWrapper;

describe("ComponentTabWrapper", () => {
  beforeEach(() => {
    // Arrange
    wrapper = mount(ComponentTabWrapper as any, {
      props: {
        currentTab: "FirstTab",
        tabs: {
          FirstTab: h("div", { id: "firstTab", type: "p" }, [
            "First Component",
          ]),
          SecondTab: h("div", { id: "secondTab", type: "p" }, [
            "Second Component",
          ]),
          ThirdTab: h("div", { id: "thirdTab", type: "p" }, [
            "Third Component",
          ]),
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
    expect(wrapper.find("div").exists()).toBeTruthy();
    expect(wrapper.text()).toContain("FirstTab");
    expect(wrapper.text()).toContain("SecondTab");
    expect(wrapper.text()).toContain("ThirdTab");
  });

  it("should render tab components", () => {
    // Arrange
    const firstTab = wrapper.find("#firstTab");

    // Assert
    expect(firstTab.text()).toContain("First Component");
  });

  it("should emit tab click", () => {
    // Act
    wrapper.find("a").trigger("click");

    // Assert
    expect(wrapper.emitted()).toHaveProperty("tab-click");

    // Arrange
    const clickEvent = wrapper.emitted("tab-click");

    // Assert
    expect(clickEvent?.[0]).toEqual(["FirstTab"]);
  });

  it("should change tab on click", async () => {
    // Arrange
    const buttonFirstTab = wrapper
      .findAll("a")
      .filter((node) => node.text().match("FirstTab"))
      .at(0);

    // Assert
    expect(buttonFirstTab?.classes()).toContain("active");

    // Assert
    expect(wrapper.text()).toContain("SecondTab");

    // Arrange
    const buttonSecondTab = wrapper
      .findAll("a")
      .filter((node) => node.text().match("SecondTab"))
      .at(0);

    // Act
    buttonSecondTab?.trigger("click");
    await nextTick();

    // Arrange
    expect(buttonSecondTab?.classes()).toContain("active");
    const secondTab = wrapper.find("#secondTab");

    // Assert
    expect(secondTab.exists());
    expect(secondTab.text()).toContain("Second Component");
  });
});
