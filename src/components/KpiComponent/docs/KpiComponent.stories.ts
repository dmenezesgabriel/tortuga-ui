import KpiComponent from "@/components/KpiComponent/KpiComponent.vue";
import type { Story } from "@storybook/vue3";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/DataVisualization/KpiComponent",
  component: KpiComponent,
  argTypes: {
    onClick: {},
  },
  decorators: [
    () => ({
      template: "<div style='padding: 3em; width: 350px;'><story /></div>",
    }),
  ],
};

const actionsData = {
  onClick: action("click"),
};

const Template = (args: any) => ({
  components: { KpiComponent },
  setup() {
    return { args, ...actionsData };
  },
  template: "<KpiComponent v-bind='args' />",
});

export const Default: Story = Template.bind({});
Default.args = {
  text: "Kpi Measure",
  value: "100",
  tooltip: "This is aditional information about tooltip",
};
