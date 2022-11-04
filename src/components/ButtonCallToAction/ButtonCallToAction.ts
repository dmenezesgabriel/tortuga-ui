import { h, type SetupContext } from "vue";

type Props = {
  disabled?: boolean;
};

// @vue/component
const ButtonCallToAction = (
  props: Props,
  { emit, slots }: { emit: SetupContext["emit"]; slots: SetupContext["slots"] }
) => {
  const style = () =>
    import("~/components/ButtonCallToAction/btn-call-to-action.scss");

  const buttonIcon = h("i", { class: "bi bi-arrow-right" });
  const buttonIconWrapper = h(
    "span",
    {
      class: "btn-call-to-action__icon text-center",
    },
    buttonIcon
  );
  const buttonText = h(
    "span",
    { class: "btn-call-to-action__text" },
    slots.default?.()
  );

  return h(
    "button",
    {
      class: `
        rounded-pill btn-call-to-action
        ${props.disabled ? "disabled" : ""}
      `,
      style: style(),
      type: "button",
      onClick(event: Event) {
        emit("click", event);
      },
    },
    [buttonText, buttonIconWrapper]
  );
};

ButtonCallToAction.props = {
  disabled: { type: Boolean, required: false, default: false },
};

ButtonCallToAction.emits = ["click"];

export default ButtonCallToAction;
