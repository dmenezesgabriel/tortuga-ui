import SkeletonBase from "@/components/SkeletonBase/SkeletonBase";
import type { Story } from "@storybook/vue3";

export default {
  title: "Components/Animations/SkeletonBase",
  component: SkeletonBase,
  decorators: [
    () => ({ template: "<div style='margin: 3em'><story /></div>" }),
  ],
};

const Template = (args: any) => ({
  components: { SkeletonBase },
  setup() {
    return { args };
  },
  template: "<SkeletonBase v-bind='args' />",
});

export const Default: Story = Template.bind({});
Default.args = {};
