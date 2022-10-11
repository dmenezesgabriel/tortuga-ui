import type { Story } from "@storybook/vue3";
import TabsWrapper from "@/components/ContentTab/TabsWrapper.vue";
import TabContent from "@/components/ContentTab/TabContent.vue";

export default {
  title: "Components/Tab/ContentTab",
  component: { TabsWrapper },
  subcomponents: { TabContent },
};

const Template: Story = (args: any, { argTypes }) => ({
  components: { TabsWrapper, TabContent },
  props: Object.keys(argTypes),
  setup() {
    return { args };
  },
  template: `
        <TabsWrapper v-bind='$props'>
            <TabContent title="Tab 1">Tab 1 Content</TabContent>
            <TabContent title="Tab 2">Tab 2 Content</TabContent>
            <TabContent title="Tab 3">Tab 3 Content</TabContent>
        </TabsWrapper >
        `,
});

export const Default = Template.bind({});
