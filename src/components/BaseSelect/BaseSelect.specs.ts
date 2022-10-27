/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, beforeEach } from "vitest";
import { shallowMount } from "@vue/test-utils";
import type { VueWrapper } from "@vue/test-utils";
import BaseSelect from "@/components/BaseSelect/BaseSelect.vue";

let wrapper: VueWrapper;

describe("BaseSelect", async () => {
  beforeEach(() => {
    wrapper = shallowMount(BaseSelect as any);
  });

  it("is called", () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
