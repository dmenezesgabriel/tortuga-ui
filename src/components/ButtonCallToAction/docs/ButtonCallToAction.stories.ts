import ButtonCallToAction from "@/components/ButtonCallToAction/ButtonCallToAction";
import type { Story } from "@storybook/vue3";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/Buttons/ButtonCallToAction",
  component: ButtonCallToAction,
  argTypes: {
    onClick: {},
  },
  decorators: [
    () => ({ template: "<div style='margin: 3em'><story /></div>" }),
  ],
};

const actionsData = {
  onClick: action("click"),
};

const Template = (args: any) => ({
  components: { ButtonCallToAction },
  setup() {
    return { args, ...actionsData };
  },
  template: "<ButtonCallToAction v-bind='args' />",
});

export const Default: Story = Template.bind({});
Default.args = {
  text: "Learn More",
};
