import CodeMirror from "@/components/CodeMirror/CodeMirror.vue";
import type { Story } from "@storybook/vue3";

export default {
  title: "Components/Text/CodeMirror",
  component: CodeMirror,
  parameters: {
    docs: { inlineStories: false, iframeHeight: 300 },
  },
  decorators: [
    () => ({ template: "<div style='margin: 3em'><story /></div>" }),
  ],
};

const Template = (args: any) => ({
  components: { CodeMirror },
  setup() {
    return { args };
  },
  template: `
        <CodeMirror v-bind='args' />
    `,
});

export const Default: Story = Template.bind({});
Default.args = {
  text: `let counter = 0
    `,
};
