import DarkModeSwitch from "@/components/DarkModeSwitch/DarkModeSwitch.vue";
import type { Story } from "@storybook/vue3";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/Settings/DarkModeSwitch",
  component: DarkModeSwitch,
  argTypes: {
    onModeChange: {},
  },
  decorators: [
    () => ({
      template: `
        <div style='padding: 1rem; background: var(--bs-dark);'>
            <story />
        </div>
      `,
    }),
  ],
};

const actionsData = {
  onModeChange: action("mode-change"),
};

const Template = (args: any) => ({
  components: { DarkModeSwitch },
  setup() {
    return { args, ...actionsData };
  },
  template: `
    <DarkModeSwitch v-bind='args' />
  `,
});

export const Default: Story = Template.bind({});
