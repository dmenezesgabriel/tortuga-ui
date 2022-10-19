/**
 * @vitest-environment jsdom
 */
import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import DarkModeSwitch from "@/components/DarkModeSwitch/DarkModeSwitch.vue";

describe("DarkModeSwitch", async () => {
  it("Should render", async () => {
    // Arrange
    const wrapper = mount(DarkModeSwitch as any, {});

    // Assert
    expect(wrapper.find("div").exists()).toBeTruthy();
  });
});
