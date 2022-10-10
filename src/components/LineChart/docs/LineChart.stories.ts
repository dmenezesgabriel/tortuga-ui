import LineChart from "../LineChart.vue";
import type { Story, Meta } from "@storybook/vue3";
// Metadata default export
export default {
  title: "Components/ChartJS/LineChart",
  parameters: {
    backgrounds: {
      values: [{ name: "dark", value: "#1e293b" }],
    },
  },
  decorators: [
    () => ({
      template:
        "<div style='margin: 3em; width: 600px; height: 300px;'><story /></div>",
    }),
  ],
  component: LineChart,
} as Meta<typeof LineChart>;

const Template = (args: any) => ({
  components: { LineChart },
  setup() {
    return { args };
  },
  template: "<LineChart v-bind='args' />",
});

// TODO
// Change to StoryFn<typeof LineChart>

// Vertical Line Chart
export const Default: Story = Template.bind({});
Default.args = {
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      datalabels: {
        anchor: "end",
        align: "end",
      },
    },
  },
};
Default.storyName = "Line Chart";
