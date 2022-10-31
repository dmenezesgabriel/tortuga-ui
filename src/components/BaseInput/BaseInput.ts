import { ref, h, type SetupContext } from "vue";

/**
 * Default input type is "text", but it can also be passed later on
 * <BaseInput type="text"></BaseInput>
 */
export interface Props {
  id?: string;
  type?: string;
  value?: string | number | undefined;
  placeholder?: string;
}

export interface Context {
  emit: SetupContext["emit"];
  attrs: SetupContext["attrs"];
}

export default {
  setup(props: Props, { emit, attrs }: Context) {
    // Use with v-model
    // <BaseInput v-model="someRef">Label</BaseInput>
    const value = ref<Props["value"]>(props.value);
    const checkTypes = ["radio", "checkbox"];

    const handleInput = (event: Event) => {
      /**
       * Emits input metadata
       * @param {Event} event
       * @returns {void}
       */

      const eventTarget = event.target as HTMLInputElement;
      let metadata;

      // Radio and Checkbox
      if (eventTarget && checkTypes.includes(eventTarget.type)) {
        metadata = {
          value: (event.target as HTMLInputElement).value,
          checked: (event.target as HTMLInputElement).checked,
        };
      } else {
        metadata = (event.target as HTMLInputElement).value;
      }
      emit("update-value", metadata);
    };

    const input = h("input", {
      attrs: attrs,
      type: props.type,
      placeholder: props.placeholder,
      value: value.value,
      onInput(event: Event) {
        handleInput(event);
      },
    });

    // const label = h("label", { for: props.id }, slots.label?.());
    return () => input;
    // <template>
    //   <label :for="props.id" v-if="slots.label?.()">
    //     <slot name="label"></slot>
    //   </label>
    //   <input
    //     v-bind="attrs"
    //     :value="value"
    //     :type="props.type"
    //     :placeholder="props.placeholder"
    //     @input="handleInput"
    //   />
    // </template>
  },
};
