import TypeWriter from "@/components/TypeWriter/TypeWriter.vue";
import type { Story, Meta } from "@storybook/vue3";

export default {
  title: "Components/Text/TypeWriter",
  component: TypeWriter,
  decorators: [
    () => ({ template: "<div style='margin: 3em'><story /></div>" }),
  ],
} as Meta<typeof TypeWriter>;

const Template = (args: any) => ({
  components: { TypeWriter },
  setup() {
    return { args };
  },
  template: "<TypeWriter v-bind='args' />",
});

export const Default: Story = Template.bind({});
Default.args = { phrases: ["Hello, World!"] };
