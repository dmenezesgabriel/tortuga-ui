import Navbar from "~/components/Navbar/Navbar.vue";
import type { Story } from "@storybook/vue3";

export default {
  title: "Components/Navbar/Navbar",
  component: Navbar,
  decorators: [
    () => ({ template: "<div style='padding: 3em'><story /></div>" }),
  ],
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
    { name: "README.md" },
    {
      name: "src",
      node: [{ name: "foo.js" }, { name: "bar.js" }],
    },
  ],
};
