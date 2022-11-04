import BsButton from "~/components/BsButton/BsButton.vue";
import type { Meta, Story } from "@storybook/vue3";

export default {
  title: "Components/Bootstrap/BsButton",
  component: BsButton,
  decorators: [
    () => ({ template: "<div style='padding: 3em'><story /></div>" }),
  ],
} as Meta;

const Template = (args: any) => ({
  components: { BsButton },
  setup() {
    // Use exposed methods from alert component
    return { args, alert };
  },
  template: `
  <BsButton class="btn-primary" type="button">Press Me!</BsButton>
  `,
});

export const Default: Story = Template.bind({});
Default.args = {
  type: "button",
};
