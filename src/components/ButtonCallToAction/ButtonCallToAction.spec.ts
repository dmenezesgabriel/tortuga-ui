/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, beforeEach } from "vitest";
import { shallowMount } from "@vue/test-utils";
import type { VueWrapper } from "@vue/test-utils";
import ButtonCallToAction from "@/components/ButtonCallToAction/ButtonCallToAction";

let wrapper: VueWrapper;

describe("ButtonCallToAction", async () => {
  beforeEach(() => {
    // Arrange
    wrapper = shallowMount(ButtonCallToAction, {
      slots: {
        default: "Click me!",
      },
    });
  });

  it("is called", () => {
    // Assert
    expect(wrapper.exists()).toBeTruthy();
  });

  it("should emit click", async () => {
    // Act
    await wrapper.find("button").trigger("click");

    // Assert
    expect(wrapper.emitted().click).toBeTruthy();
    expect(wrapper.emitted().click[1]) instanceof Event;
  });

  it("should render", () => {
    // Assert
    expect(wrapper.find("button").exists()).toBeTruthy();
  });

  it("should show text", () => {
    // Assert
    expect(wrapper.text()).toContain("Click me!");
  });

  it("should be disabled", () => {
    // Arrange
    wrapper = shallowMount(ButtonCallToAction, {
      props: {
        disabled: true,
      },
      slots: {
        default: "Click me!",
      },
    });

    // Assert
    expect(wrapper.classes()).toContain("disabled");
  });
});
