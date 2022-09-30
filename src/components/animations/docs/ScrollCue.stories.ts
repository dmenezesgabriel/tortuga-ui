import ScrollCue from "../ScrollCue";
import type { Story } from "@storybook/vue3";

export default {
  title: "Animations/ScrollCue",
  component: ScrollCue,
};

const Template: Story = (args) => ({
  components: { ScrollCue },
  setup() {
    return { args };
  },
  template: "<ScrollCue />",
});

export const Default = Template.bind({});
