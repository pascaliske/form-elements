/**
 * Tweak the built in webpack config for storybook.
 *
 * @param {object} config - The built in webpack config
 * @returns {object} - The tweaked webpack config
 */
module.exports = config => {
    // enable scss loading
    config.module.rules.unshift({
        test: /\.scss$/,
        use: ['style-loader'],
    })

    config.module.rules.unshift({
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
    })

    return config
}
