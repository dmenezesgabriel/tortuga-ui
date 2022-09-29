import { h } from "vue";

interface Props {
  href: string;
  src: string;
  alt: string;
}

const LogoBox = (props: Props) => {
  return h(
    "div",
    {
      class: "position-relative w-100 text-center shadow-sm rounded logo-box",
    },
    [
      h("a", { href: props.href, target: "blank" }, [
        h("img", { src: props.src, alt: props.alt, class: "img-fluid" }),
      ]),
    ]
  );
};

LogoBox.props = {
  href: { type: String, required: true },
  src: { type: String, required: true },
  alt: { type: String, required: true },
};

export default LogoBox;
