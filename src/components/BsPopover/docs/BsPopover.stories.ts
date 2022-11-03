import BsPopover from "@/components/BsPopover/BsPopover.vue";
import type { Meta, Story } from "@storybook/vue3";

export default {
  title: "Components/Bootstrap/BsPopover",
  component: BsPopover,
  decorators: [
    () => ({ template: "<div style='padding: 3em'><story /></div>" }),
  ],
} as Meta;

const Template = (args: any) => ({
  components: { BsPopover },
  setup() {
    // Use exposed methods from alert component
    return { args, alert };
  },
  template: `
  <BsPopover class="btn btn-primary" v-bind='args'>Hover Me!</BsPopover>
  `,
});

export const Default: Story = Template.bind({});
Default.args = {
  type: "button",
  options: {
    title: "This is a Popover",
    content: "Popover content here",
    trigger: "hover",
  },
};
