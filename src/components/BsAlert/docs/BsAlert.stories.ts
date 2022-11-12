import BsAlert from "~/components/BsAlert/BsAlert.vue";
import type { Meta, Story } from "@storybook/vue3";
import { ref } from "vue";

export default {
  title: "Components/Bootstrap/BsAlert",
  component: BsAlert,
  decorators: [
    () => ({ template: "<div style='padding: 3em'><story /></div>" }),
  ],
} as Meta;

const Template = (args: any) => ({
  components: { BsAlert },
  setup() {
    // Use exposed methods from alert component
    const alert = ref<any>();
    return { args, alert };
  },
  template: `
    <BsAlert ref="alert" class="alert-warning alert-dismissible fade show" v-bind='args'>
      <strong>Holy guacamole!</strong> You should check in on some of those fields below.
      <button
        class="btn-close"
        type="button"
        @click="alert.close()"
      >
      </button>
      <template #details>
      Details here
      </template>
    </BsAlert>
  `,
});

export const Default: Story = Template.bind({});
Default.args = {
  type: "div",
};
