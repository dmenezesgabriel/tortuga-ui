import MultiselectCheckbox from "@/components/MultiselectCheckbox/MultiselectCheckbox.vue";
import type { Story } from "@storybook/vue3";
import { action } from "@storybook/addon-actions";

export default {
  component: MultiselectCheckbox,
  decorators: [
    () => ({
      template: "<div style='margin: 3em; width: 300px;'><story /></div>",
    }),
  ],
};

const actionsData = {
  onMounted: action("Mounted"),
  onApply: action("Apply"),
  onRevert: action("Revert"),
  onUnmounted: action("onUnmounted"),
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
    { name: "Cat", available: true, visible: true, exclude: false },
    { name: "Dog", available: true, visible: true, exclude: false },
    { name: "Bird", available: true, visible: true, exclude: false },
  ],
};
