import { h, type SetupContext } from "vue";

interface Props {
  type: string;
}

const TextContent = (props: Props, context: SetupContext) => {
  return h(
    props.type,
    {
      class: "text-content",
      onClick(event: Event) {
        context.emit("click", event);
      },
    },
    context.slots.default()
  );
};

TextContent.emits = ["click"];

TextContent.props = {
  type: { type: String, required: true },
};
export default TextContent;
