import SkeletonTable from "@/components/SkeletonBase/SkeletonTable";
import type { Meta, Story } from "@storybook/vue3";

export default {
  title: "Components/Animations/SkeletonTable",
  component: SkeletonTable,
  decorators: [
    () => ({ template: "<div style='padding: 3em'><story /></div>" }),
  ],
} as Meta;

const Template = (args: any) => ({
  components: { SkeletonTable },
  setup() {
    return { args };
  },
  template: `
    <SkeletonTable v-bind='args' />
  `,
});

export const Default: Story = Template.bind({});
Default.args = {
  colNumber: 5,
  rowNumber: 5,
};
