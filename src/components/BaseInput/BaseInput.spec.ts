/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, beforeEach } from "vitest";
import { shallowMount } from "@vue/test-utils";
import type { VueWrapper } from "@vue/test-utils";
import BaseInput from "@/components/BaseInput/BaseInput.vue";

let wrapper: VueWrapper;

describe("BaseInput", async () => {
  beforeEach(() => {
    // Arrange
    wrapper = shallowMount(BaseInput);
  });

  it("is called", () => {
    // Assert
    expect(wrapper.exists()).toBeTruthy();
  });

  it("should render", () => {
    // Assert
    expect(wrapper.find("input").exists()).toBeTruthy();
  });

  it("should emit update-value", async () => {
    // Arrange
    wrapper = shallowMount(BaseInput, {
      attrs: {
        type: "text",
      },
    });

    // Act
    const input = wrapper.find("input[type='text']");
    await input.setValue("some value");

    // Assert
    expect((<HTMLInputElement>input.element).value).toBe("some value");
    expect(wrapper.emitted()).toHaveProperty("update-value");
    expect(wrapper.emitted("update-value")?.[0][0]).toBe("some value");
  });

  it("should show label", () => {
    // Arrange
    wrapper = shallowMount(BaseInput, {
      slots: {
        label: "This is a label",
      },
      attrs: {
        type: "text",
      },
    });

    // Assert
    expect(wrapper.text()).toContain("This is a label");
  });
});
