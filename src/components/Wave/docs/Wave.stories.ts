import Wave from "~/components/Wave/Wave";
import type { Story } from "@storybook/vue3";

export default {
  title: "Components/Layout/Wave",
  component: Wave,
  decorators: [
    () => ({
      template: "<div style='background: blue;'><story /></div>",
    }),
  ],
};

// TODO
// Add a dropdown control
const Template = (args: any) => ({
  components: { Wave },
  setup() {
    return { args };
  },
  template: "<Wave v-bind='args' />",
});

export const upRight: Story = Template.bind({});
upRight.args = {
  direction: "upRight",
};

export const upLeft: Story = Template.bind({});
upLeft.args = {
  direction: "upLeft",
};

export const downLeft: Story = Template.bind({});
downLeft.args = {
  direction: "downLeft",
};
