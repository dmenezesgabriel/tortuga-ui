/**
 * useTheme decorator for storybook component stories.
 */
import { useEffect, useGlobals } from "@storybook/addons";

export const useTheme = (StoryFn) => {
  /**
   * @param {StoryFn} StoryFn
   * @return {StoryFn}
   */

  // Get theme from global types declared at ./storybook/preview.js
  const [{ theme }] = useGlobals();

  useEffect(() => {
    // Add data-mode attribute and theme class to Storybook's story iframe
    // This classes are styled at src/assets/scss/
    document.body.removeAttribute("class");
    document.body.setAttribute("class", theme);
    document.documentElement.removeAttribute("data-mode");
    document.documentElement.setAttribute("data-mode", theme);
  }, [theme]);

  return StoryFn();
};
