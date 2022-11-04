import FilterChart from "~/examples/FilterChart/FilterChartView.vue";
import type { Story } from "@storybook/vue3";

export default {
  title: "Examples/FilterChart/FilterChart",
  component: FilterChart,
  decorators: [
    () => ({ template: "<div style='padding: 3em'><story /></div>" }),
  ],
};

const Template = (args: any) => ({
  components: { FilterChart },
  setup() {
    return { args };
  },
  template: `
    <FilterChart v-bind='args' />
  `,
});

export const Default: Story = Template.bind({});
