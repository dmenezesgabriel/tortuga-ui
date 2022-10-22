import Tree from "@/components/Tree/Tree.vue";
import type { Story } from "@storybook/vue3";

export default {
  title: "Components/Text/Tree",
  component: Tree,
  decorators: [
    () => ({ template: "<div style='padding: 3em'><story /></div>" }),
  ],
};

const Template = (args: any) => ({
  components: { Tree },
  setup() {
    return { args };
  },
  template: `
    <Tree v-bind='args' />
  `,
});

export const Default: Story = Template.bind({});
Default.args = {
  name: "FileTree",
  node: [
    { type: "file", name: "README.md" },
    {
      type: "folder",
      name: "src",
      node: [
        { type: "file", name: "foo.js" },
        { type: "file", name: "bar.js" },
      ],
    },
  ],
};
