import SimpleDashboard from "@/views/Dashboard/SimpleDashboardView.vue";
import type { Story } from "@storybook/vue3";

export default {
  title: "Views/Dashboards/SimpleDashboard",
  component: SimpleDashboard,
  decorators: [
    () => ({ template: "<div style='margin: 3em'><story /></div>" }),
  ],
};

const Template = (args: any) => ({
  components: { SimpleDashboard },
  setup() {
    return { args };
  },
  template: `
    <SimpleDashboard v-bind='args' />
  `,
});

export const Default: Story = Template.bind({});
