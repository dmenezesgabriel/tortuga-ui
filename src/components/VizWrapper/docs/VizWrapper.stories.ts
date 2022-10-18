import VizWrapper from "@/components/VizWrapper/VizWrapper.vue";
import type { Story, Meta } from "@storybook/vue3";

export default {
  title: "Components/DataVisualization/VizWrapper",
  component: VizWrapper,
  decorators: [
    () => ({
      template: "<div style='padding: 3em; max-width:350px;'><story /></div>",
    }),
  ],
} as Meta<typeof VizWrapper>;

const Template = (args: any) => ({
  components: { VizWrapper },
  setup() {
    return { args };
  },
  template: `
    <VizWrapper v-bind='args'>
        <template #content>
            Your Viz Here!
        </template>
        <template #fallback>
            Not loaded yet!
        </template>
    </VizWrapper>
  `,
});

export const Default: Story = Template.bind({});
Default.args = {
  title: "Visualization title",
  tooltip: "This Visualization has a detailed description.",
};
