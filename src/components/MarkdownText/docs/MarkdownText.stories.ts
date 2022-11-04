import MarkdownText from "~/components/MarkdownText/MarkdownText.vue";
import type { Story } from "@storybook/vue3";

export default {
  title: "Components/Text/MarkdownText",
  component: MarkdownText,
  parameters: {
    docs: { inlineStories: false, iframeHeight: 300 },
  },
  decorators: [
    () => ({ template: "<div style='padding: 3em'><story /></div>" }),
  ],
};

const Template = (args: any) => ({
  components: { MarkdownText },
  setup() {
    return { args };
  },
  template: `
        <MarkdownText v-bind='args' />
    `,
});

export const Default: Story = Template.bind({});
Default.args = {
  markdown: `
  # Hello MarkedJS!

  Be careful with indentation, your markdown can be parsed by markedJS as a code block.😦
  `,
};
