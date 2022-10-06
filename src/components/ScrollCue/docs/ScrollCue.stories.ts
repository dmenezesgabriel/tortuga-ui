import ScrollCue from "@/components/ScrollCue/ScrollCue";
import type { Story } from "@storybook/vue3";

export default {
  title: "Animations/ScrollCue",
  component: ScrollCue,
};

const Template = (args: any) => ({
  components: { ScrollCue },
  setup() {
    return { args };
  },
  template: "<ScrollCue v-bind='args' />",
});

export const Default: Story = Template.bind({});
Default.args = {
  color: "black",
};
