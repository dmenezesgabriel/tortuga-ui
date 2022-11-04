import BsModal from "~/components/BsModal/BsModal.vue";
import type { Meta, Story } from "@storybook/vue3";
import { ref } from "vue";

export default {
  title: "Components/Bootstrap/BsModal",
  component: BsModal,
  decorators: [
    () => ({ template: "<div style='padding: 3em'><story /></div>" }),
  ],
} as Meta;

const Template = (args: any) => ({
  components: { BsModal },
  setup() {
    // Use exposed methods from dropdown component
    const modal = ref<any>();
    return { args, modal };
  },
  template: `
    <button class="btn btn-primary" @click="modal.toggle()">Toggle modal</button>
    <BsModal ref="modal" v-bind='args' class="fade">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
            <button type="button" class="btn-close" aria-label="Close" @click="modal.hide()"></button>
          </div>
          <div class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-neutral" @click="modal.hide()">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </BsModal>
  `,
});

export const Default: Story = Template.bind({});
Default.args = {
  type: "div",
};
