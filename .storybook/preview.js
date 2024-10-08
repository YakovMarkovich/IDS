export const parameters  = {
    actions: { argTypesRegex: "^on[A-Z].*"},
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        }
    },
    layout: 'fullscreen',
    options: {
        storySort: {
            method: 'alphabetical',
            order: ['Document', 'Introduction', 'Wrappers', 'Atoms', 'Molecules', 'Organisms', 'Template', 'Styleguide']
        }
    }
}