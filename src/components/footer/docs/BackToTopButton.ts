import BackToTopButton from "@/components/footer/BackToTopButton.vue";
import type { Story } from "@storybook/vue3";

export default {
  title: "Footer/BackToTopButton",
  component: BackToTopButton,
};

const Template: Story = (args) => ({
  components: { BackToTopButton },
  setup() {
    return { args };
  },
  template: "<BackToTopButton />",
});

export const Default = Template.bind({});
