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
    <BaseInput v-bind='args'>
      <template #label>
        <span class="mx-2">This is a Label: </span>
      </template>
    </BaseInput>
  `,
});

export const Default: Story = Template.bind({});
Default.args = {
  type: "text",
};

export const TypeNumber: Story = Template.bind({});
TypeNumber.args = {
  type: "number",
};

export const TypeEmail: Story = Template.bind({});
TypeEmail.args = {
  type: "email",
};

export const TypePassword: Story = Template.bind({});
TypePassword.args = {
  type: "password",
};

export const TypeSearch: Story = Template.bind({});
TypeSearch.args = {
  type: "search",
};

export const TypeUrl: Story = Template.bind({});
TypeUrl.args = {
  type: "url",
};

export const TypeTel: Story = Template.bind({});
TypeUrl.args = {
  type: "tel",
};

export const TypeDate: Story = Template.bind({});
TypeDate.args = {
  type: "date",
};

export const TypeTime: Story = Template.bind({});
TypeDate.args = {
  type: "time",
};

export const TypeRange: Story = Template.bind({});
TypeRange.args = {
  type: "range",
};

export const TypeColor: Story = Template.bind({});
TypeColor.args = {
  type: "color",
};

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
BootstrapStyled.args = {
  type: "text",
};

export const BootstrapStyledDefaultValue: Story = StyledTemplate.bind({});
BootstrapStyledDefaultValue.args = {
  defaultValue: "Default Form Value",
};
