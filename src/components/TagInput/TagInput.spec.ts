/**
 * @vitest-environment jsdom
 */
import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import TagInput from "@/components/TagInput/TagInput.vue";

describe("TagInput", async () => {
  it("should render", async () => {
    const wrapper = await mount(TagInput, {
      props: {
        text: "Click me!",
        disabled: false,
      },
    });

    await wrapper.find("input[type='text']").setValue("Some Tag");
    await wrapper.trigger("keydown.enter");
  });
});
