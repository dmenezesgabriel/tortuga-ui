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
    <label>Some label: <label>
    <BaseInput v-bind='args' />
  `,
});

export const Default: Story = Template.bind({});
Default.args = {
  type: "text",
  placeholder: "Text",
};

export const TypeNumber: Story = Template.bind({});
TypeNumber.args = {
  type: "number",
};

export const TypeEmail: Story = Template.bind({});
TypeEmail.args = {
  type: "email",
  placeholder: "example@example.com",
};

export const TypePassword: Story = Template.bind({});
TypePassword.args = {
  type: "password",
  placeholder: "password",
};

export const TypeSearch: Story = Template.bind({});
TypeSearch.args = {
  type: "search",
  placeholder: "search",
};

export const TypeUrl: Story = Template.bind({});
TypeUrl.args = {
  type: "url",
  placeholder: "www.example.com.br",
};

export const TypeTel: Story = Template.bind({});
TypeTel.args = {
  type: "tel",
  placeholder: "(ddd) 12345-1234",
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
};

export const TypeColor: Story = Template.bind({});
TypeColor.args = {
  type: "color",
};

const FileTemplate = (args: any) => ({
  components: { BaseInput },
  setup() {
    return { args };
  },
  template: `
    <BaseInput v-bind='args' />
  `,
});

export const TypeFile: Story = FileTemplate.bind({});
TypeFile.args = {
  type: "file",
};

const CheckboxRadioTemplate = (args: any) => ({
  components: { BaseInput },
  setup() {
    return { args };
  },
  template: `
    <BaseInput v-bind='args' />
    <label class="mx-2">Some label<label>
  `,
});

export const TypeCheckbox: Story = CheckboxRadioTemplate.bind({});
TypeCheckbox.args = {
  type: "checkbox",
  value: "checkbox value",
};

export const TypeRadio: Story = CheckboxRadioTemplate.bind({});
TypeRadio.args = {
  type: "radio",
  value: "radio value",
};

export const DefaultValue: Story = Template.bind({});
DefaultValue.args = {
  value: "Default Form Value",
};

export const Disabled: Story = Template.bind({});
Disabled.args = {
  disabled: true,
};

const StyledTemplate = (args: any) => ({
  components: { BaseInput },
  setup() {
    return { args };
  },
  template: `
    <label class="form-label">Some label: </label>
    <BaseInput v-bind='args' />
  `,
});

export const BootstrapStyled: Story = StyledTemplate.bind({});
BootstrapStyled.args = {
  type: "text",
  class: "form-control",
  placeholder: "Text",
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
  placeholder: "search",
};

export const BootstrapStyledUrl: Story = StyledTemplate.bind({});
BootstrapStyledUrl.args = {
  type: "url",
  class: "form-control",
  placeholder: "www.example.com",
};

export const BootstrapStyledTel: Story = StyledTemplate.bind({});
BootstrapStyledTel.args = {
  type: "tel",
  class: "form-control",
  placeholder: "(ddd) 12345-1234",
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
  class: "form-control form-range",
};

export const BootstrapStyledColor: Story = StyledTemplate.bind({});
BootstrapStyledColor.args = {
  type: "color",
  class: "form-control form-control-color",
};

const StyledFileTemplate = (args: any) => ({
  components: { BaseInput },
  setup() {
    return { args };
  },
  template: `
  <div class="form-check">
    <BaseInput v-bind='args' />
  </div>
  `,
});

export const BootstrapStyledFile: Story = StyledFileTemplate.bind({});
BootstrapStyledFile.args = {
  type: "file",
  class: "form-control",
};

export const BootstrapStyledDisabled: Story = StyledTemplate.bind({});
BootstrapStyledDisabled.args = {
  type: "text",
  class: "form-control",
  placeholder: "Disabled",
  disabled: true,
};

export const BootstrapStyledDefaultValue: Story = StyledTemplate.bind({});
BootstrapStyledDefaultValue.args = {
  value: "Default Form Value",
  class: "form-control",
};

const StyledRadioCheckboxTemplate = (args: any) => ({
  components: { BaseInput },
  setup() {
    return { args };
  },
  template: `
  <div class="form-check">
    <BaseInput v-bind='args' />
    <label class="form-check-label">Label</label>
  </div>
  `,
});

export const BootstrapStyleCheckbox: Story = StyledRadioCheckboxTemplate.bind(
  {}
);
BootstrapStyleCheckbox.args = {
  type: "checkbox",
  value: "checkbox value",
  class: "form-check-input",
};

export const BootstrapStyleRadio: Story = StyledRadioCheckboxTemplate.bind({});
BootstrapStyleRadio.args = {
  type: "radio",
  value: "radio value",
  class: "form-check-input",
};

const StyledSwitchTemplate = (args: any) => ({
  components: { BaseInput },
  setup() {
    return { args };
  },
  template: `
  <div class="form-check form-switch">
    <BaseInput v-bind='args' />
    <label class="form-check-label">Label</label>
  </div>
  `,
});

export const BootstrapStyledSwitch: Story = StyledSwitchTemplate.bind({});
BootstrapStyledSwitch.args = {
  type: "checkbox",
  value: "checkbox value",
  class: "form-check-input",
};
