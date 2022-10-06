import ButtonCallToAction from "@/components/ButtonCallToAction/ButtonCallToAction";
import type { Story } from "@storybook/vue3";

export default {
  title: "Components/Buttons/ButtonCallToAction",
  component: ButtonCallToAction,
  decorators: [
    () => ({ template: "<div style='margin: 3em'><story /></div>" }),
  ],
};

const Template = (args: any) => ({
  components: { ButtonCallToAction },
  setup() {
    return { args };
  },
  template: "<ButtonCallToAction v-bind='args' />",
});

export const Default: Story = Template.bind({});
Default.args = {
  text: "Learn More",
};
