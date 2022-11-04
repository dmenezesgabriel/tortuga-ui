import BsTooltip from "~/components/BsTooltip/BsTooltip.vue";
import type { Meta, Story } from "@storybook/vue3";

export default {
  title: "Components/Bootstrap/BsTooltip",
  component: BsTooltip,
  decorators: [
    () => ({ template: "<div style='padding: 3em'><story /></div>" }),
  ],
} as Meta;

const Template = (args: any) => ({
  components: { BsTooltip },
  setup() {
    return { args };
  },
  template: `
    <BsTooltip v-bind='args'>
      Hover me!
    </BsTooltip>
  `,
});

export const Default: Story = Template.bind({});
Default.args = {
  type: "button",
  class: "btn btn-primary",
  options: { title: "This is a Tooltip" },
};

export const BottomPlacement: Story = Template.bind({});
BottomPlacement.args = {
  type: "button",
  class: "btn btn-primary",
  options: { title: "This is a Tooltip", placement: "bottom" },
};
