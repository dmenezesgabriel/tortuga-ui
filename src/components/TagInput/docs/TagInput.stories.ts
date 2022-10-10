import TagInput from "@/components/TagInput/TagInput.vue";
import type { Story } from "@storybook/vue3";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/Form/TagInput",
  component: TagInput,
  decorators: [
    () => ({ template: "<div style='margin: 3em'><story /></div>" }),
  ],
  argTypes: {
    onAddTag: {},
    onRemoveTag: {},
  },
};

const actionsData = {
  onAddTag: action("add-tag"),
  onRemoveTag: action("remove-tag"),
};

const Template = (args: any) => ({
  components: { TagInput },
  setup() {
    return { args, ...actionsData };
  },
  template: "<TagInput v-bind='args' />",
});

export const Default: Story = Template.bind({});
