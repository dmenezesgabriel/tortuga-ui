import GradientHeader from "@/components/GradientHeader/GradientHeader.vue";
import type { Story } from "@storybook/vue3";

export default {
  title: "Components/Layout/GradientHeader",
  component: GradientHeader,
  decorators: [
    () => ({ template: "<div style='padding: 3em'><story /></div>" }),
  ],
};

const Template = (args: any) => ({
  components: { GradientHeader },
  setup() {
    return { args };
  },
  template: `
    <GradientHeader v-bind='args'>
      <template #title>
      Title
      </template>
      <template #subtitle>
      Subtitle
      </template>
    </GradientHeader>
  `,
});

export const Default: Story = Template.bind({});
