module.exports = {
    stories: ['../projects/**/*.stories.ts'],
    staticDirs: ['../node_modules'],
    core: {
        builder: 'webpack5',
    },
    features: {
        postcss: false,
    },
    addons: [
        '@storybook/addon-docs',
        '@storybook/addon-notes',
        '@storybook/addon-knobs',
        '@storybook/addon-actions',
        '@storybook/addon-links',
    ],
}
