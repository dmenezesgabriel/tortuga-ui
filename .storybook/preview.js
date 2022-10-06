import "../src/assets/scss/index.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    values: [
      { name: "white", value: "#fff" },
      { name: "dark", value: "#1e293b" },
      { name: "dark-alt", value: "#334155" },
    ],
  },
};

export const decorators = [
  (story) => ({
    components: { story },
    template: '<div style="margin: 3em;"><story /></div>',
  }),
];
