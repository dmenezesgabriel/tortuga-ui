import ScrollCue from "@/components/ScrollCue/ScrollCue";
import type { Story } from "@storybook/vue3";

export default {
  title: "Components/Animations/ScrollCue",
  component: ScrollCue,
  parameters: {
    docs: { inlineStories: false, iframeHeight: 300 },
  },
  decorators: [
    () => ({ template: "<div style='margin: 3em'><story /></div>" }),
  ],
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
