module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/components/ImagineProvider/stories/ImagineProvider.stories.tsx",
    "../src/components/Container/stories/Container.stories.tsx",
    "../src/components/Text/stories/Text.stories.tsx",
    "../src/components/RichText/stories/RichText.stories.tsx",
    "../src/components/Title/stories/H1.stories.tsx",
    "../src/components/Title/stories/H2.stories.tsx",
    "../src/components/Title/stories/H3.stories.tsx",
    "../src/components/Title/stories/H4.stories.tsx",
    "../src/components/Title/stories/H5.stories.tsx",
    "../src/components/Divider/stories/Divider.stories.tsx",
    "../src/components/Icon/stories/Icon.stories.tsx",
    "../src/components/Image/stories/Image.stories.tsx"
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
