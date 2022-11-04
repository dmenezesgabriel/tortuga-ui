/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, beforeEach } from "vitest";
import { shallowMount, type VueWrapper } from "@vue/test-utils";
import DarkModeSwitch from "~/components/DarkModeSwitch/DarkModeSwitch.vue";

let wrapper: VueWrapper;

describe("DarkModeSwitch", async () => {
  beforeEach(() => {
    // Arrange
    wrapper = shallowMount(DarkModeSwitch as any, {});
  });

  it("is called", () => {
    // Assert
    expect(wrapper.exists()).toBeTruthy();
  });

  it("should render", async () => {
    // Assert
    expect(wrapper.find("div").exists()).toBeTruthy();
  });

  it("should emit mode change", () => {
    // Act
    wrapper.find(".toggle-mode").trigger("click");

    // Assert
    expect(wrapper.emitted()).toHaveProperty("mode-change");

    // Arrange
    const clickEvent = wrapper.emitted("mode-change");

    //TODO
    // Check emitted value
  });

  it.todo("should show moon icon when match media dark");
  it.todo("should show bright icon when not match media dark");
  it.todo("should show moon icon if preferredDarkMode in localStorage true");
  it.todo("should show bright icon if preferredDarkMode in localStorage false");
  it.todo("Should add data mode and body style class when loaded");
  it.todo("Should add data mode and body style class when clicked");
});
