import Navbar from "~/components/Navbar/Navbar.vue";
import type { Story } from "@storybook/vue3";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/Navbar/Navbar",
  component: Navbar,
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
  components: { Navbar },
  setup() {
    return { args };
  },
  template: `
  <Navbar v-bind='args' />
  `,
});

export const Default: Story = Template.bind({});
Default.args = {
  name: "Navbar",
  node: [
    { name: "Home" },
    {
      name: "Sub menu",
      node: [{ name: "item 1" }, { name: "item 2" }],
    },
  ],
};

export const Vertical: Story = Template.bind({});
Vertical.args = {
  name: "Navbar",
  node: [
    { name: "Home" },
    {
      name: "Sub menu",
      node: [{ name: "item 1" }, { name: "item 2" }],
    },
  ],
  orient: "vertical",
};

export const StyledLinks: Story = Template.bind({});
StyledLinks.args = {
  name: "Navbar",
  node: [
    { name: "Home" },
    {
      name: "Sub menu",
      node: [{ name: "item 1" }, { name: "item 2" }],
    },
  ],
  orient: "vertical",
};
