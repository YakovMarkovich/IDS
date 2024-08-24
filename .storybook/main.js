module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/components/ImagineProvider/stories/ImagineProvider.stories.tsx",
    "../src/components/Container/stories/Container.stories.tsx",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-docs",

      options: {
        options: {
          jsxOptions: {},
          csfPluginOptions: null,
          mdxPluginOptions: {},
          transcludeMarkdown: true,
        },
      },
    },
    {
      name: "@storybook/preset-scss",
      options: {
        cssLoaderOptions: {
          modules: {
            localIdentName: "[local]-[hash:base64:4]",
          },
        },
      },
    },
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  typescript: {
    check: true, // type-check stories during Storybook build
  }
};
