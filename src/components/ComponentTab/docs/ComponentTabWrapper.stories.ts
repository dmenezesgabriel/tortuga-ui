import ComponentTabWrapper from "~/components/ComponentTab/ComponentTabWrapper.vue";
import TextContent from "~/components/TextContent/TextContent";
import type { Story } from "@storybook/vue3";
import { h } from "vue";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/Tab/ComponentTabWrapper",
  component: ComponentTabWrapper,
  argTypes: {
    onTabClick: {},
  },
  decorators: [
    () => ({ template: "<div style='padding: 3em'><story /></div>" }),
  ],
};

const actionsData = {
  onTabClick: action("tab-click"),
};

const Template = (args: any) => ({
  components: { ComponentTabWrapper },
  setup() {
    return { args, ...actionsData };
  },
  template: "<ComponentTabWrapper v-bind='args' />",
});

export const Default: Story = Template.bind({});
Default.args = {
  currentTab: "FirstTab",
  tabs: {
    FirstTab: h(TextContent, { type: "p" }, () => ["First Component"]),
    SecondTab: h(TextContent, { type: "p" }, () => ["Second Component"]),
    ThirdTab: h(TextContent, { type: "p" }, () => ["Third Component"]),
  },
};
