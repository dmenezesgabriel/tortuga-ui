import { useEffect, useGlobals } from "@storybook/addons";

export const useTheme = (StoryFn) => {
  const [{ theme }] = useGlobals();

  useEffect(() => {
    document.body.removeAttribute("class");
    document.body.setAttribute("class", theme);
    document.documentElement.removeAttribute("data-mode");
    document.documentElement.setAttribute("data-mode", theme);
  }, [theme]);

  return StoryFn();
};
