import { h } from "vue";

type Props = {
  type: string;
};

const TextContent = (
  props: Props,
  { emit, slots }: { emit: any; slots: any }
) => {
  return h(
    props.type,
    {
      class: "text-content",
      onClick(event: Event) {
        emit("click", event);
      },
    },
    slots.default()
  );
};

TextContent.emits = ["click"];

TextContent.props = {
  type: { type: String, required: true },
};
export default TextContent;
