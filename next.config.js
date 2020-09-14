const withFonts = require('next-fonts');

module.exports = withFonts({
    webpack(config, options) {
        config.module.rules.push({
            test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
            use: {
              loader: 'url-loader',
              options: {
                limit: 100000,
                name: '[name].[ext]'
              }
            }
        })
        return config;
    },
    env: {
        API_URL: 'xxx',
        MAP_API: process.env.MAP_API
    },
})