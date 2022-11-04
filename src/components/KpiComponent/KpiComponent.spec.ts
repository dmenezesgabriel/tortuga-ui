/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, beforeEach } from "vitest";
import { shallowMount, type VueWrapper } from "@vue/test-utils";
import KpiComponent from "~/components/KpiComponent/KpiComponent.vue";

let wrapper: VueWrapper;

describe("KpiComponent", () => {
  beforeEach(() => {
    // Arrange
    wrapper = shallowMount(KpiComponent as any, {
      props: {
        tooltipOptions: {
          title: "This is a tooltip",
        },
      },
      slots: { value: "100", text: "Some KPI" },
    });
  });

  it("is called", () => {
    // Assert
    expect(wrapper.exists()).toBeTruthy();
  });

  it("should render", () => {
    // Assert
    expect(wrapper.find("div").exists()).toBeTruthy();
    expect(wrapper.text()).toContain("100");
    expect(wrapper.text()).toContain("Some KPI");
  });
});
