/**
 * @vitest-environment jsdom
 */
import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import ButtonCallToAction from "@/components/ButtonCallToAction/ButtonCallToAction";

describe("ButtonCallToAction", async () => {
  it("Should render", async () => {
    // Arrange
    const wrapper = mount(ButtonCallToAction, {
      props: {
        text: "Click me!",
      },
    });

    // Assert
    expect(wrapper.find("button").exists()).toBeTruthy();
    expect(wrapper.text()).toContain("Click me!");
  });

  it("Should emit click", async () => {
    // Arrange
    const wrapper = mount(ButtonCallToAction, {
      props: {
        text: "Click me!",
        disabled: false,
      },
    });

    // Act
    await wrapper.find("button").trigger("click");

    // Assert
    expect(wrapper.emitted().click).toBeTruthy();
    expect(wrapper.emitted().click[1]) instanceof Event;
  });
});
