import { h } from "vue";

type Props = {
  type: string;
};

// @vue/component
const TextContent = (props: Props, { slots }: { slots: any }) => {
  return h(
    props.type,
    {
      class: "text-content",
    },
    slots.default()
  );
};

TextContent.props = {
  type: { type: String, required: true },
};
export default TextContent;
