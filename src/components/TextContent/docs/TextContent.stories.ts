import TextContent from "@/components/TextContent/TextContent";
import type { Story, Meta } from "@storybook/vue3";

export default {
  title: "Components/Text/TextContent",
  component: TextContent,
  decorators: [
    () => ({ template: "<div style='padding: 3em'><story /></div>" }),
  ],
} as Meta<typeof TextContent>;

const Template = (args: any) => ({
  components: { TextContent },
  setup() {
    return { args };
  },
  template: "<TextContent v-bind='args'>Hello, World!</TextContent>",
});

export const Default: Story = Template.bind({});
Default.args = { type: "h1" };
