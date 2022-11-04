/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, beforeEach } from "vitest";
import { shallowMount, type VueWrapper } from "@vue/test-utils";
import ScrollCue from "~/components/ScrollCue/ScrollCue";

let wrapper: VueWrapper;

describe("ScrollCue", () => {
  beforeEach(() => {
    // Arrange
    wrapper = shallowMount(ScrollCue as any, {
      props: {
        color: "black",
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
    expect(wrapper.findAll("span").length).toEqual(3);
    expect(wrapper.classes()).toContain("arrow-wrapper");
  });
});
