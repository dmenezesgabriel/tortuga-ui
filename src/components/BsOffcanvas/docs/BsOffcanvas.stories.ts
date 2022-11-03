import BsOffcanvas from "@/components/BsOffcanvas/BsOffcanvas.vue";
import type { Meta, Story } from "@storybook/vue3";
import { ref } from "vue";

export default {
  title: "Components/Bootstrap/BsOffcanvas",
  component: BsOffcanvas,
} as Meta;

const Template = (args: any) => ({
  components: { BsOffcanvas },
  setup() {
    const offcanvas = ref<any>();
    return { args, offcanvas };
  },
  template: `
  <button class="btn btn-primary m-3" type="button" @click="offcanvas.toggle()">
    Toggle offcanvas
  </button>

  <BsOffcanvas ref="offcanvas" v-bind='args'>
    <div class="offcanvas-body">
      <h3>Hello, World!</h3>
      <p>Click outside to close.</p>
    </div>
  </BsOffcanvas>
  `,
});

export const Default: Story = Template.bind({});
Default.args = {
  type: "div",
  class: "offcanvas-start border",
  options: {
    backdrop: true,
    keyboard: true,
    scroll: true,
  },
};
