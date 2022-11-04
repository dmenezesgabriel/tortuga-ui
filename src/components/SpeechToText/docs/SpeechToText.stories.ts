import SpeechToText from "~/components/SpeechToText/SpeechToText.vue";
import type { Meta, Story } from "@storybook/vue3";
import { actions } from "@storybook/addon-actions";

export default {
  title: "Components/SpeechToText/SpeechToText",
  component: SpeechToText,
  argTypes: {
    onStart: {},
    onStop: {},
    onResult: {},
  },
  decorators: [
    () => ({ template: "<div style='padding: 3em'><story /></div>" }),
  ],
} as Meta;

const actionsData = {
  onStart: actions("start"),
  onStop: actions("stop"),
  onResult: actions("result"),
};

const Template = (args: any) => ({
  components: { SpeechToText },
  setup() {
    return { args };
  },
  template: `
    <SpeechToText v-bind='args'/>
  `,
});

export const Default: Story = Template.bind({});
Default.args = {};
