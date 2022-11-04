import { onBeforeMount, onMounted, onUnmounted, ref, toRaw } from "vue";

const useBootstrapLifeCycle = (
  bootstrapClass: any, //TODO correct typing
  options?: any // TODO correct typing
) => {
  /**
   * Composable to reuse Bootstrap javascript classes with vue correctly.
   */
  const domElement = ref<HTMLElement | undefined>();
  const classInstance = ref<any>();

  const dispose = () => classInstance.value.dispose();

  onMounted(() => {
    if (domElement.value) {
      classInstance.value = new bootstrapClass(domElement.value, options);
    }
  });

  onUnmounted(() => {
    dispose();
  });

  return { classInstance, domElement };
};

export default useBootstrapLifeCycle;
