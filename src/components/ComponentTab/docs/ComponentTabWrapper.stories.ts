import ComponentTabWrapper from "@/components/ComponentTab/ComponentTabWrapper.vue";
import TextContent from "@/components/TextContent/TextContent";
import type { Story } from "@storybook/vue3";
import { h } from "vue";

export default {
  title: "Components/Tab/ComponentTabWrapper",
  component: ComponentTabWrapper,
  decorators: [
    () => ({ template: "<div style='margin: 3em'><story /></div>" }),
  ],
};

const Template = (args: any) => ({
  components: { ComponentTabWrapper },
  setup() {
    return { args };
  },
  template: "<ComponentTabWrapper v-bind='args' />",
});

export const Default: Story = Template.bind({});
Default.args = {
  currentTab: "FirstTab",
  tabs: {
    FirstTab: h(TextContent, { type: "h1" }, "First Component"),
    SecondTab: h(TextContent, { type: "h2" }, "Second Component"),
    ThirdTab: h(TextContent, { type: "h3" }, "Third Component"),
  },
};
