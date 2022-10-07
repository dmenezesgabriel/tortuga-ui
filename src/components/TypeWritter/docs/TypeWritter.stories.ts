import TypeWritter from "@/components/TypeWritter/TypeWritter.vue";
import type { Story, Meta } from "@storybook/vue3";

export default {
  title: "Components/Text/TypeWritter",
  component: TypeWritter,
  decorators: [
    () => ({ template: "<div style='margin: 3em'><story /></div>" }),
  ],
} as Meta<typeof TypeWritter>;

const Template = (args: any) => ({
  components: { TypeWritter },
  setup() {
    return { args };
  },
  template: "<TypeWritter v-bind='args' />",
});

export const Default: Story = Template.bind({});
Default.args = { phrases: ["Hello, World!"] };
