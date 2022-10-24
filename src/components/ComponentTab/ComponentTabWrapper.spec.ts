/**
 * @vitest-environment jsdom
 */
import { h, nextTick } from "vue";
import { describe, it, expect, beforeEach } from "vitest";
import { mount, VueWrapper } from "@vue/test-utils";
import ComponentTabWrapper from "@/components/ComponentTab/ComponentTabWrapper.vue";

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
    wrapper.find("button").trigger("click");

    // Assert
    expect(wrapper.emitted()).toHaveProperty("tab-click");

    // Arrange
    const clickEvent = wrapper.emitted("tab-click");

    // Assert
    expect(clickEvent?.[0]).toEqual(["FirstTab"]);
  });

  it("should change tab on click", async () => {
    // Assert
    expect(wrapper.text()).toContain("SecondTab");

    // Arrange
    const button = wrapper
      .findAll("button")
      .filter((node) => node.text().match("SecondTab"))
      .at(0);

    // Act
    button?.trigger("click");
    await nextTick();

    const secondTab = wrapper.find("#secondTab");
    expect(secondTab.exists());
    expect(secondTab.text()).toContain("Second Component");
  });
});
