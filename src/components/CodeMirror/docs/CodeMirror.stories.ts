import CodeMirror from "~/components/CodeMirror/CodeMirror.vue";
import type { Story } from "@storybook/vue3";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/Text/CodeMirror (WIP)",
  component: CodeMirror,
  parameters: {
    docs: { inlineStories: false, iframeHeight: 300 },
  },
  argTypes: {
    onChange: {},
    onUpdate: {},
    onFocus: {},
    onBlur: {},
    onReady: {},
  },
  decorators: [
    () => ({ template: "<div style='padding: 3em'><story /></div>" }),
  ],
};

const actionsData = {
  onChange: action("change"),
  onUpdate: action("update"),
  onFocus: action("focus"),
  onBlur: action("blur"),
  onReady: action("ready"),
};

const Template = (args: any) => ({
  components: { CodeMirror },
  setup() {
    return { args, ...actionsData };
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
