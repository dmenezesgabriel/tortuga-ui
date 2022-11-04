/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, beforeEach } from "vitest";
import { shallowMount, type VueWrapper } from "@vue/test-utils";
import Wave from "~/components/Wave/Wave";

let wrapper: VueWrapper;

describe("Wave", () => {
  beforeEach(() => {
    // Arrange
    wrapper = shallowMount(Wave as any, {
      props: {
        direction: "upRight",
      },
    });
  });

  it("is called", () => {
    // Assert
    expect(wrapper.exists()).toBeTruthy();
  });

  it("should render", () => {
    // Assert
    expect(wrapper.find("svg").exists()).toBeTruthy();
    expect(wrapper.classes()).toContain("wave");
  });
});
