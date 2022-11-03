import BsDropdown from "@/components/BsDropdown/BsDropdown.vue";
import type { Meta, Story } from "@storybook/vue3";
import { ref } from "vue";

export default {
  title: "Components/Bootstrap/BsDropdown",
  component: BsDropdown,
  decorators: [
    () => ({ template: "<div style='padding: 3em'><story /></div>" }),
  ],
} as Meta;

const Template = (args: any) => ({
  components: { BsDropdown },
  setup() {
    // Use exposed methods from dropdown component
    const dropdown = ref<any>();
    return { args, dropdown };
  },
  template: `
    <BsDropdown ref="dropdown" v-bind='args'>
      <button
        class="btn btn-primary dropdown-toggle"
        type="button"
        @click="dropdown.toggle()"
      >
        Dropdown button
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item">Action</a></li>
        <li><a class="dropdown-item">Another action</a></li>
        <li><a class="dropdown-item">Something else here</a></li>
      </ul>
    </BsDropdown>
  `,
});

export const Default: Story = Template.bind({});
Default.args = {
  type: "div",
};
