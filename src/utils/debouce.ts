export const debounce = (fn: any, delay = 0, immediate = false) => {
  let timeout: NodeJS.Timeout;
  return (...args: any) => {
    if (immediate && !timeout) fn(...args);
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};
