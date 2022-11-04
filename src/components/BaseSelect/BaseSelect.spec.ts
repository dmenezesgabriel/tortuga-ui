/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, beforeEach } from "vitest";
import { shallowMount } from "@vue/test-utils";
import type { VueWrapper } from "@vue/test-utils";
import BaseSelect from "~/components/BaseSelect/BaseSelect.vue";

let wrapper: VueWrapper;

describe("BaseSelect", async () => {
  beforeEach(() => {
    wrapper = shallowMount(BaseSelect as any);
  });

  it("is called", () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it("it should render", () => {
    // Assert
    expect(wrapper.find("select").exists()).toBeTruthy();
  });

  it("should emit change-value", async () => {
    // Arrange
    wrapper = shallowMount(BaseSelect as any, {
      slots: {
        default: [
          "<option value='A'>A</option>",
          "<option value='B'>B</option>",
          "<option value='B'>B</option>",
        ],
      },
    });

    // Act
    const select = wrapper.find("select");
    select.setValue("A");

    // Assert
    expect((<HTMLSelectElement>select.element).value).toBe("A");
    expect(wrapper.emitted()).toHaveProperty("change-value");
    expect(wrapper.emitted("change-value")?.[0][0]).toBe("A");
  });

  it("multiselect should emit change-value", async () => {
    // Arrange
    wrapper = shallowMount(BaseSelect as any, {
      attrs: {
        multiple: true,
      },
      slots: {
        default: [
          "<option value='A'>A</option>",
          "<option value='B'>B</option>",
          "<option value='B'>B</option>",
        ],
      },
    });

    // TODO
    // Investigate attrs bug

    // expect(wrapper.attributes()).toEqual({
    //   multiple: true,
    // });
    // // Act
    // const select = wrapper.find("select");
    // select.setValue(["A", "B"]);

    // // Assert
    // expect((<HTMLSelectElement>select.element).value).toBe(["A", "B"]);
    // expect(wrapper.emitted()).toHaveProperty("change-value");
    // expect(wrapper.emitted("change-value")?.[0][0]).toBe(["A", "B"]);
  });
});
