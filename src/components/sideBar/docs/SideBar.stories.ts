import SideBar from "@/components/sideBar/Sidebar.vue";
import type { Story } from "@storybook/vue3";

export default {
  title: "Components/SideBar/SideBar",
  component: SideBar,
  decorators: [
    () => ({
      template: "<div style='height: 100%; width: 100%'><story /></div>",
    }),
  ],
  parameters: {
    docs: { inlineStories: false, iframeHeight: 600 },
  },
};

const Template = (args: any) => ({
  components: { SideBar },
  setup() {
    return { args };
  },
  template: `
        <SideBar v-bind='args'>
        </SideBar>
  `,
});

export const Default: Story = Template.bind({});
Default.args = {};
