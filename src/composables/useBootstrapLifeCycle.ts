import { onBeforeMount, onMounted, onUnmounted, ref } from "vue";

const useBootstrapLifeCycle = (
  bootstrapClass: any, //TODO correct typing
  htmlElementTag: string,
  options: any // TODO correct typing
) => {
  /**
   * Composable to reuse Bootstrap javascript classes with vue correctly.
   */
  const domElement = ref<HTMLElement | undefined>();
  const classInstance = ref<any>();
  const htmlTag = ref<string>();

  const dispose = () => classInstance.value.dispose();

  onBeforeMount(() => {
    htmlTag.value = htmlElementTag;
  });

  onMounted(() => {
    if (domElement.value) {
      classInstance.value = new bootstrapClass(domElement.value, options);
    }
  });

  onUnmounted(() => {
    dispose();
  });

  return { classInstance, domElement, htmlTag };
};

export default useBootstrapLifeCycle;
