import { marked } from "marked";
import { customRef } from "vue";
import type { Ref } from "vue";

const useMarkdownRef = (
  markdown: string,
  options?: Partial<marked.MarkedOptions>
): Ref<string> => {
  /**
   * @param {string} markdown
   * @param {Partial<marked.MarkedOptions>} options
   * @return {String}
   */
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
