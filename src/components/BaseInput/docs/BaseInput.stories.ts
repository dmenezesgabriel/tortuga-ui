import BaseInput from "@/components/BaseInput/BaseInput.vue";
import type { Meta, Story } from "@storybook/vue3";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/Form/BaseInput",
  component: BaseInput,
  argTypes: {
    onUpdateValue: {},
  },
  decorators: [
    () => ({ template: "<div style='padding: 3em'><story /></div>" }),
  ],
} as Meta;

const actionsData = {
  onUpdateValue: action("update-value"),
};

const Template = (args: any) => ({
  components: { BaseInput },
  setup() {
    return { args };
  },
  template: `
    <BaseInput v-bind='args' type="text">
      <template #label>
        <span class="mx-2">This is a Label: </span>
      </template>
    </BaseInput>
  `,
});

export const Default: Story = Template.bind({});
Default.args = {};

export const DefaultValue: Story = Template.bind({});
DefaultValue.args = {
  defaultValue: "Default Form Value",
};

const StyledTemplate = (args: any) => ({
  components: { BaseInput },
  setup() {
    return { args };
  },
  template: `
    <BaseInput v-bind='args' type="text" class="form-control">
      <template #label>
        <span class="form-label">This is a Label: </span>
      </template>
    </BaseInput>
  `,
});

export const BootstrapStyled: Story = StyledTemplate.bind({});
