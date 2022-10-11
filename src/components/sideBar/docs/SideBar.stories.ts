import SideBar from "@/components/sideBar/Sidebar.vue";
import type { Story } from "@storybook/vue3";

export default {
  title: "Components/SideBar/SideBar",
  component: SideBar,
  decorators: [
    () => ({
      template: "<div style='height: 100%;'><story /></div>",
    }),
  ],
};

const Template = (args: any) => ({
  components: { SideBar },
  setup() {
    return { args };
  },
  template: `
        <SideBar v-bind='args'>
        <div>Nav</div>
        </SideBar>
  `,
});

export const Default: Story = Template.bind({});
Default.args = {};
