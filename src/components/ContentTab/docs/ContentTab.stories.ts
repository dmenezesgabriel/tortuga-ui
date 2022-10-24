import type { Story } from "@storybook/vue3";
import TabsWrapper from "@/components/ContentTab/TabsWrapper.vue";
import TabContent from "@/components/ContentTab/TabContent.vue";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/Tab/ContentTab",
  component: { TabsWrapper },
  subcomponents: { TabContent },
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

const Template: Story = (args: any) => ({
  components: { TabsWrapper, TabContent },
  setup() {
    return { args, ...actionsData };
  },
  template: `
        <TabsWrapper v-bind='args'>
            <TabContent title="Tab 1">Tab 1 Content</TabContent>
            <TabContent title="Tab 2">Tab 2 Content</TabContent>
            <TabContent title="Tab 3">Tab 3 Content</TabContent>
        </TabsWrapper >
        `,
});

export const Default = Template.bind({});
