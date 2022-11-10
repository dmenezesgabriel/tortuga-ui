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

const HorizontalTemplate = (args: any) => ({
  components: { NavItems },
  setup() {
    return { args };
  },
  template: `
  <div class="navbar bg-dark p-3">
    <div class="container-fluid">
        <NavItems v-bind='args' />
    </div>
  </div>
  `,
});

export const Default: Story = HorizontalTemplate.bind({});
Default.args = {
  name: "NavItems",
  activeLinkName: "Home",
  node: [
    { name: "Home", to: "/" },
    {
      name: "Sub menu",
      node: [
        { name: "item 1", to: "item-1" },
        { name: "item 2", to: "item-2" },
      ],
    },
    { name: "item 3", to: "item-3", isDisabled: true, badge: "new" },
  ],
};

const VerticalTemplate = (args: any) => ({
  components: { NavItems },
  setup() {
    return { args };
  },
  template: `
  <div class="navbar">
    <NavItems v-bind='args' />
  </div>
  `,
});

export const Vertical: Story = VerticalTemplate.bind({});
Vertical.args = {
  name: "NavItems",
  activeLinkName: "Home",
  node: [
    { name: "Home", to: "/" },
    {
      name: "Sub menu",
      node: [
        { name: "item 1", to: "item-1" },
        { name: "item 2", to: "item-2" },
      ],
    },
    { name: "item 3", to: "item-3", isDisabled: true, badge: "new" },
  ],
  orient: "vertical",
};
