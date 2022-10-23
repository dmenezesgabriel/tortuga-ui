import { h, type SetupContext } from "vue";

type Props = {
  type: string;
};

// @vue/component
const TextContent = (
  props: Props,
  { slots }: { slots: SetupContext["slots"] }
) => {
  return h(
    props.type,
    {
      class: "text-content",
    },
    slots.default?.()
  );
};

TextContent.props = {
  type: { type: String, required: true },
};
export default TextContent;
