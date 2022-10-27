import BaseSelect from "@/components/BaseSelect/BaseSelect.vue";
import type { Meta, Story } from "@storybook/vue3";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/Form/BaseSelect",
  component: BaseSelect,
  argTypes: {
    onChangeValue: {},
  },
  decorators: [
    () => ({ template: "<div style='padding: 3em;'><story /></div>" }),
  ],
} as Meta;

const actionsData = {
  onChangeValue: action("change-value"),
};

const Template = (args: any) => ({
  components: { BaseSelect },
  setup() {
    return { args };
  },
  template: `
  <BaseSelect v-bind='args'>
    <option disabled value="" selected>Please select one</option>
    <option value="A">A</option>
    <option value="B">B</option>
    <option value="C">C</option>
  </BaseSelect>
  `,
});

export const Default: Story = Template.bind({});

export const Multiple: Story = Template.bind({});
Multiple.args = {
  multiple: true,
};

export const Disabled: Story = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const BootstrapStyled: Story = Template.bind({});
BootstrapStyled.args = {
  class: "form-select",
};

export const BootstrapStyledMultiple: Story = Template.bind({});
BootstrapStyledMultiple.args = {
  multiple: true,
  class: "form-select",
};

export const BootstrapStyledDisabled: Story = Template.bind({});
BootstrapStyledDisabled.args = {
  disabled: true,
  class: "form-select",
};
