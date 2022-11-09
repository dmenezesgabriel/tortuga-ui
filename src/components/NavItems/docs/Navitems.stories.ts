import NavItems from "~/components/NavItems/NavItems.vue";
import type { Story } from "@storybook/vue3";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/NavItems/NavItems",
  component: NavItems,
  argTypes: {
    onNavClick: {},
  },
  decorators: [
    () => ({ template: "<div style='padding: 3em'><story /></div>" }),
  ],
};

// TODO
// Emits not working \_0_/ ?
const actionsData = {
  onNavClick: action("nav-click"),
};

const Template = (args: any) => ({
  components: { NavItems },
  setup() {
    return { args };
  },
  template: `
  <NavItems v-bind='args' />
  `,
});

export const Default: Story = Template.bind({});
Default.args = {
  name: "NavItems",
  node: [
    { name: "Home", to: "/" },
    {
      name: "Sub menu",
      node: [
        { name: "item 1", to: "item-1" },
        { name: "item 2", to: "item-2" },
      ],
    },
  ],
};

export const Vertical: Story = Template.bind({});
Vertical.args = {
  name: "NavItems",
  node: [
    { name: "Home", to: "/" },
    {
      name: "Sub menu",
      node: [
        { name: "item 1", to: "item-1" },
        { name: "item 2", to: "item-2" },
      ],
    },
  ],
  orient: "vertical",
};
