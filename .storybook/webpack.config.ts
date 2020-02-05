import { Configuration } from 'webpack'

/**
 * Tweak the built in webpack config for storybook.
 *
 * @param config - The built in webpack config
 * @returns - The tweaked webpack config
 */
module.exports = async ({ config }: { config: Configuration }): Promise<Configuration> => {
    // remove default scss and css loading
    config.module.rules = config.module.rules.filter(rule => !rule.test.toString().includes('css'))

    // enable scss loading
    config.module.rules.push({
        test: /\.s?css$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
    })

    return config
}
