import BsTooltip from "@/components/BsTooltip/BsTooltip";
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
        <button class="btn btn-primary text-white">Hover Me!</button>
    </BsTooltip>
  `,
});

export const Default: Story = Template.bind({});
Default.args = {
  options: { title: "This is a Tooltip" },
};

export const BottomPlacement: Story = Template.bind({});
BottomPlacement.args = {
  options: { title: "This is a Tooltip", placement: "bottom" },
};
