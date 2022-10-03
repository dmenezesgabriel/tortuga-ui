import { h } from "vue";

interface Props {
  text: string;
}

const ButtonCallToAction = (props: Props) => {
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
    },
    [buttonText, buttonIconWrapper]
  );
};

ButtonCallToAction.props = {
  text: { type: String, required: true },
  to: { type: String, required: true },
};
export default ButtonCallToAction;
