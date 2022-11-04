import MarkdownEditor from "~/examples/MarkdownEditor/MarkdownEditor.vue";
import type { Story } from "@storybook/vue3";

export default {
  title: "Examples/MarkdownEditor/MarkdownEditor",
  component: MarkdownEditor,
  decorators: [
    () => ({ template: "<div style='padding: 3em'><story /></div>" }),
  ],
};

const Template = (args: any) => ({
  components: { MarkdownEditor },
  setup() {
    return { args };
  },
  template: `
    <MarkdownEditor v-bind='args' />
  `,
});

export const Default: Story = Template.bind({});
