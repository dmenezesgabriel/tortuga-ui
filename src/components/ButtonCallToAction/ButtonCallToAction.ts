import { h, type SetupContext } from "vue";

interface Props {
  text: string;
}

const ButtonCallToAction = (props: Props, context: SetupContext) => {
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
    props.text
  );
  return h(
    "button",
    {
      class: "rounded-pill btn-call-to-action border border-secondary",
      type: "button",
      onClick(event: Event) {
        context.emit("click", event);
      },
    },
    [buttonText, buttonIconWrapper]
  );
};

ButtonCallToAction.props = {
  text: { type: String, required: true },
};

ButtonCallToAction.emits = ["click"];

export default ButtonCallToAction;
