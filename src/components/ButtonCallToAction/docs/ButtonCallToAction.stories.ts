import ButtonCallToAction from "@/components/ButtonCallToAction/ButtonCallToAction";
import type { Meta, Story } from "@storybook/vue3";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/Buttons/ButtonCallToAction",
  component: ButtonCallToAction,
  argTypes: {
    onClick: {},
  },
  decorators: [
    () => ({ template: "<div style='padding: 3em'><story /></div>" }),
  ],
} as Meta;

const actionsData = {
  onClick: action("click"),
};

const Template = (args: any) => ({
  components: { ButtonCallToAction },
  setup() {
    return { args, ...actionsData };
  },
  template: "<ButtonCallToAction v-bind='args'>Learn More</ButtonCallToAction>",
});

export const Default: Story = Template.bind({});

export const Disabled: Story = Template.bind({});
Disabled.args = {
  disabled: true,
};
