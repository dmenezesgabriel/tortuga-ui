import TagInput from "@/components/TagInput/TagInput.vue";
import type { Story } from "@storybook/vue3";

export default {
  title: "Components/Form/TagInput",
  component: TagInput,
  decorators: [
    () => ({ template: "<div style='margin: 3em'><story /></div>" }),
  ],
};

const Template = (args: any) => ({
  components: { TagInput },
  setup() {
    return { args };
  },
  template: "<TagInput v-bind='args' />",
});

export const Default: Story = Template.bind({});
