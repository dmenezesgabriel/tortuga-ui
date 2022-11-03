import BsToast from "@/components/BsToast/BsToast.vue";
import type { Meta, Story } from "@storybook/vue3";
import { ref } from "vue";

export default {
  title: "Components/Bootstrap/BsToast",
  component: BsToast,
  decorators: [
    () => ({ template: "<div style='padding: 3em'><story /></div>" }),
  ],
} as Meta;

const Template = (args: any) => ({
  components: { BsToast },
  setup() {
    const toast = ref<any>();
    return { args, toast };
  },
  template: `
  <button type="button" class="btn btn-primary" @click="toast.show()">Show live toast</button>

  <div class="toast-container position-fixed bottom-0 end-0 p-3">
    <BsToast v-bind="args" ref="toast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <strong class="me-auto">Bootstrap</strong>
        <small>11 mins ago</small>
        <button type="button" class="btn-close" aria-label="Close" @click="toast.hide()"></button>
      </div>
      <div class="toast-body">
        Hello, world! This is a toast message.
      </div>
    </BsToast>
  </div>
  `,
});

export const Default: Story = Template.bind({});
Default.args = {
  type: "div",
};
