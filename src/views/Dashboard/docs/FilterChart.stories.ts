import SimpleDashboard from "@/views/Dashboard/FilterChartView.vue";
import type { Story } from "@storybook/vue3";

export default {
  title: "Views/Dashboards/FilterChart",
  component: SimpleDashboard,
  decorators: [
    () => ({ template: "<div style='padding: 3em'><story /></div>" }),
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
