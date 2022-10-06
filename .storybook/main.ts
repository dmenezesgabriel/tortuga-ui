import type { StorybookViteConfig } from "@storybook/builder-vite";
import { resolve } from "path";
import { mergeConfig } from "vite";

const config: StorybookViteConfig = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-scss",
    "@storybook/preset-typescript",
  ],
  framework: "@storybook/vue3",
  core: {
    builder: "@storybook/builder-vite",
  },
  features: {
    storyStoreV7: true,
  },
  async viteFinal(config, options) {
    if (config.resolve && config.resolve.alias)
      config.resolve.alias["@"] = resolve(__dirname, "../src");
    return mergeConfig(config, {
      optimizeDeps: {
        include: ["storybook-dark-mode"],
      },
    });
  },
};

export default config;
