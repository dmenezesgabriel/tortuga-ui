import { h, type SetupContext } from "vue";

interface Props {
  type: string;
}

const TextContent = (
  props: any,
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
