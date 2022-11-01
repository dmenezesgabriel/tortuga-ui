import BsOffcanvas from "@/components/BsOffcanvas/BsOffcanvas.vue";
import type { Meta, Story } from "@storybook/vue3";

export default {
  title: "Components/Bootstrap/BsOffcanvas (WIP)",
  component: BsOffcanvas,
} as Meta;

const Template = (args: any) => ({
  components: { BsOffcanvas },
  setup() {
    return { args };
  },
  template: `
      <BsOffcanvas v-bind='args'>
        <div class="offcanvas-body">
          <div>Hello, World!</div>
        </div>
      </BsOffcanvas>
  `,
});

export const Default: Story = Template.bind({});
Default.args = {
  type: "div",
  class: "offcanvas-start border position-relative",
  options: {
    backdrop: true,
    keyboard: true,
    scroll: true,
  },
  show: true,
};
