/**
 * @vitest-environment jsdom
 */
import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import ButtonCallToAction from "@/components/ButtonCallToAction/ButtonCallToAction";

describe("ButtonCallToAction", async () => {
  it("should render", () => {
    const wrapper = mount(ButtonCallToAction, {
      props: {
        text: "Click me!",
        disabled: false,
      },
    });

    expect(wrapper.find("button").exists()).toBeTruthy();
    expect(wrapper.text()).toContain("Click me!");
  });
});
