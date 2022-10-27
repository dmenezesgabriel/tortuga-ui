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
TypeTime.args = {
  type: "time",
};

export const TypeRange: Story = Template.bind({});
TypeRange.args = {
  type: "range",
  className: "form-range",
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
    <BaseInput v-bind='args'>
      <template #label>
        <span class="form-label">This is a Label: </span>
      </template>
    </BaseInput>
  `,
});

export const BootstrapStyled: Story = StyledTemplate.bind({});
BootstrapStyled.args = {
  type: "text",
  class: "form-control",
};

export const BootstrapStyledNumber: Story = StyledTemplate.bind({});
BootstrapStyledNumber.args = {
  type: "number",
  class: "form-control",
};

export const BootstrapStyledEmail: Story = StyledTemplate.bind({});
BootstrapStyledEmail.args = {
  type: "email",
  class: "form-control",
  placeholder: "email@example.com",
};

export const BootstrapStyledPassword: Story = StyledTemplate.bind({});
BootstrapStyledPassword.args = {
  type: "password",
  class: "form-control",
  placeholder: "password",
};

export const BootstrapStyledSearch: Story = StyledTemplate.bind({});
BootstrapStyledSearch.args = {
  type: "search",
  class: "form-control",
};

export const BootstrapStyledUrl: Story = StyledTemplate.bind({});
BootstrapStyledUrl.args = {
  type: "url",
  class: "form-control",
};

export const BootstrapStyledTel: Story = StyledTemplate.bind({});
BootstrapStyledTel.args = {
  type: "tel",
  class: "form-control",
};

export const BootstrapStyledDate: Story = StyledTemplate.bind({});
BootstrapStyledDate.args = {
  type: "date",
  class: "form-control",
};

export const BootstrapStyledTime: Story = StyledTemplate.bind({});
BootstrapStyledTime.args = {
  type: "time",
  class: "form-control",
};

export const BootstrapStyledRange: Story = StyledTemplate.bind({});
BootstrapStyledRange.args = {
  type: "range",
  class: "form-range",
};

export const BootstrapStyledColor: Story = StyledTemplate.bind({});
BootstrapStyledColor.args = {
  type: "color",
  class: "form-control-color",
};

export const BootstrapStyledDefaultValue: Story = StyledTemplate.bind({});
BootstrapStyledDefaultValue.args = {
  defaultValue: "Default Form Value",
  class: "form-control",
};
