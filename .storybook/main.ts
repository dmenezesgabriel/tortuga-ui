import { StorybookViteConfig } from "@storybook/builder-vite";

const path = require("path");
const { mergeConfig } = require("vite");

const SRC_PATH = path.resolve(__dirname, "../src");

export const config: StorybookViteConfig = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    {
      name: "@storybook/preset-scss",
      options: {
        cssLoaderOptions: {
          modules: true,
          localIdentName: "[name]__[local]--[hash:base64:5]",
        },
      },
    },
  ],
  framework: "@storybook/vue3",
  core: {
    builder: "@storybook/builder-vite",
    disableTelemetry: true,
    enableCrashReports: false,
  },
  features: {
    storyStoreV7: true,
  },
  viteFinal: async (config) => {
    if (config.resolve && config.resolve.alias)
      config.resolve.alias["@"] = SRC_PATH;
    return mergeConfig(config, {
      css: {
        postcss: true,
        preprocessorOptions: {
          scss: {
            additionalData: `
            @import "${SRC_PATH}/assets/scss/components/scroll-cue";
            `,
          },
        },
      },
    });
  },
};
