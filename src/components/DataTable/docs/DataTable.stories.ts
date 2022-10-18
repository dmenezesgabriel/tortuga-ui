import DataTable from "@/components/DataTable/DataTable.vue";
import type { Story, Meta } from "@storybook/vue3";

export default {
  title: "Components/DataTable/DataTable",
  component: DataTable,
  decorators: [
    () => ({
      template: "<div style='padding: 3em; max-width: 600px;'><story /></div>",
    }),
  ],
} as Meta<typeof DataTable>;

const Template = (args: any) => ({
  components: { DataTable },
  setup() {
    return { args };
  },
  template: "<DataTable v-bind='args' />",
});

export const Default: Story = Template.bind({});
Default.args = {
  fields: ["Col A", "Col B", "Col C", "Col D", "Col E"],
  data: [
    {
      "Col A": 1,
      "Col B": 1,
      "Col C": 1,
      "Col D": 1,
      "Col E": 1,
    },
    {
      "Col A": 2,
      "Col B": 2,
      "Col C": 2,
      "Col D": 2,
      "Col E": 2,
    },
    {
      "Col A": 3,
      "Col B": 3,
      "Col C": 3,
      "Col D": 3,
      "Col E": 3,
    },
    {
      "Col A": 4,
      "Col B": 4,
      "Col C": 4,
      "Col D": 4,
      "Col E": 4,
    },
    {
      "Col A": 5,
      "Col B": 5,
      "Col C": 5,
      "Col D": 5,
      "Col E": 5,
    },
    {
      "Col A": 6,
      "Col B": 6,
      "Col C": 6,
      "Col D": 6,
      "Col E": 6,
    },
  ],
};
