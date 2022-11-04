import { h } from "vue";

type Props = {
  height?: string;
  width?: string;
  borderRadius?: string;
};

const SkeletonBase = (props: Props) => {
  const style = () => import("~/components/SkeletonBase/skeleton-base.scss");
  return h("span", {
    class: "skeleton-loader-base",
    style: {
      ...style(),
      height: props.height,
      width: props.width,
      "border-radius": props.borderRadius,
    },
  });
};

SkeletonBase.props = {
  height: { type: String, default: "30px" },
  width: { type: String, default: "100%" },
  borderRadius: { type: String, default: "5px" },
};

export default SkeletonBase;
