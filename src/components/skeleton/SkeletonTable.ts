import { h } from "vue";
import SkeletonBase from "@/components/skeleton/SkeletonBase";

interface Props {
  colNumber: number;
  rowNumber: number;
}

const SkeletonTable = (props: Props) => {
  const th = Array.from({ length: props.colNumber }, () =>
    h("th", { scope: "col" }, [
      h(SkeletonBase, { height: "20px", width: "100px" }),
    ])
  );
  const td = Array.from({ length: props.colNumber }, () =>
    h("td", {}, [h(SkeletonBase, { height: "20px", width: "100px" })])
  );
  const rows = Array.from({ length: props.rowNumber }, () => h("tr", null, td));

  const tHead = h("thead", null, [h("tr", null, th)]);
  const tBody = h("tbody", null, rows);
  const table = h("div", { class: "table" }, [tHead, tBody]);
  return h("div", { class: "table-responsive" }, [table]);
};

SkeletonTable.props = {
  colNumber: { type: Number, required: true },
  rowNumber: { type: Number, required: true },
};

export default SkeletonTable;
