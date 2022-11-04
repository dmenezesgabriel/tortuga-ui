import SkeletonBase from "~/components/SkeletonBase/SkeletonBase";
import type { Story } from "@storybook/vue3";

export default {
  title: "Components/Animations/SkeletonBase",
  component: SkeletonBase,
  decorators: [
    () => ({ template: "<div style='padding: 3em'><story /></div>" }),
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
Default.args = {
  height: "30px",
  width: "100%",
  borderRadius: "5px",
};

export const Rounded: Story = Template.bind({});
Rounded.args = {
  height: "200px",
  width: "200px",
  borderRadius: "50%",
};
