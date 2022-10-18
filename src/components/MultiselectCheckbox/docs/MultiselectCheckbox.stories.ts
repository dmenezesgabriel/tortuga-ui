import MultiselectCheckbox from "@/components/MultiselectCheckbox/MultiselectCheckbox.vue";
import type { Story } from "@storybook/vue3";
import { action } from "@storybook/addon-actions";

export default {
  component: MultiselectCheckbox,
  title: "Components/MultiselectCheckbox",
  decorators: [
    () => ({
      template: "<div style='margin: 3em; width: 300px;'><story /></div>",
    }),
  ],
  argTypes: {
    onMounted: {},
    onApply: {},
    onRevert: {},
    onUnmounted: {},
  },
};

const actionsData = {
  onMounted: action("mounted"),
  onApply: action("apply"),
  onRevert: action("revert"),
  onUnmounted: action("unmounted"),
};

const Template = (args: any) => ({
  components: { MultiselectCheckbox },
  setup() {
    return { args, ...actionsData };
  },
  template: "<MultiselectCheckbox v-bind='args' />",
});

export const Default: Story = Template.bind({});
Default.args = {
  id: "animals",
  title: "Animals",
  options: [
    { name: "Cat  🐈", available: true, visible: true, exclude: false },
    { name: "Dog 🐕", available: true, visible: true, exclude: false },
    { name: "Bird 🐦", available: true, visible: true, exclude: false },
  ],
};
