import { Tooltip } from "bootstrap";
import { h, onMounted, ref, type PropType, type SetupContext } from "vue";

// TODO
// Use a render function and pass tag type as prop so it can be used as any element.

export interface Props {
  options?: Partial<Tooltip.Options>;
}

export interface Context {
  emit: SetupContext["emit"];
  attrs: SetupContext["attrs"];
  slots: SetupContext["slots"];
}

export default {
  props: { options: Object as PropType<Props["options"]> },
  setup(props: Props, { emit, slots, attrs }: Context) {
    console.log(props.options);

    const tooltipElement = ref<HTMLElement | null>(null);
    const tooltip = ref<any>(null);

    onMounted(() => {
      if (tooltipElement.value) {
        tooltip.value = new Tooltip(tooltipElement.value, props.options);
      }
    });

    return () =>
      h(
        "span",
        { "aria-label": "tooltip", tabindex: "0", ref: tooltipElement },
        slots.default?.()
      );
  },
};
