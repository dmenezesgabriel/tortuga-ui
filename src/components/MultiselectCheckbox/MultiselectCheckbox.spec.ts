/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, beforeEach } from "vitest";
import { shallowMount, type VueWrapper } from "@vue/test-utils";
import MultiselectCheckbox from "@/components/MultiselectCheckbox/MultiselectCheckbox.vue";

let wrapper: VueWrapper;

describe("MultiselectCheckbox", () => {
  beforeEach(() => {
    // Arrange
    wrapper = shallowMount(MultiselectCheckbox as any, {
      props: {
        id: "animals",
        title: "Animals",
        options: [
          { name: "Cat", available: true, visible: true, exclude: false },
          { name: "Dog", available: true, visible: true, exclude: false },
          { name: "Bird", available: true, visible: true, exclude: false },
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
  });

  it.todo("should emit mounted");
  it.todo("should emit apply");
  it.todo("should emit revert");
  it.todo("should emit unmounted");
  it.todo("should open dropdown");
  it.todo("should close dropdown");
  it.todo("should filter dropdown on search");
});
