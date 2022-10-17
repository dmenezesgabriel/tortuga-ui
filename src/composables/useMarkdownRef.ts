import { marked } from "marked";
import { customRef } from "vue";

const useMarkdownRef = (
  markdown: string,
  options?: Partial<marked.MarkedOptions>
) => {
  return customRef((track, trigger) => {
    return {
      get() {
        track();
        return marked.parse(markdown, options);
      },
      set(newValue) {
        markdown = newValue;
        trigger();
      },
    };
  });
};

export default useMarkdownRef;
