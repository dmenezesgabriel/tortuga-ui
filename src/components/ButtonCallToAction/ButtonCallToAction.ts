import { h, type SetupContext } from "vue";

interface Props {
  text: string;
}

const ButtonCallToAction = (props: any, { emit }: { emit: any }) => {
  const style = () =>
    import("@/components/ButtonCallToAction/btn-call-to-action.scss");
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
  text: { type: String, required: true },
};

ButtonCallToAction.emits = ["click"];

export default ButtonCallToAction;
