import { ref, customRef } from "vue";
import { debounce } from "~/utils/debouce";

export const useDebouncedRef = (
  initialValue: any,
  delay: number,
  immediate: boolean
) => {
  const state = ref(initialValue);
  const debouncedRef = customRef((track, trigger) => ({
    get() {
      track();
      return state.value;
    },
    set: debounce(
      (value: any) => {
        state.value = value;
        trigger();
      },
      delay,
      immediate
    ),
  }));
  return debouncedRef;
};
