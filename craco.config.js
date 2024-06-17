// craco.config.js
const path = require('path');

module.exports = {
    webpack: {
        configure: (webpackConfig, { paths }) => {
            // Add .ts and .tsx as resolvable extensions.
            webpackConfig.resolve.extensions.push('.ts', '.tsx');

            // Add a rule to use ts-loader for .ts and .tsx files
            webpackConfig.module.rules.push({
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            });

            return webpackConfig;
        }
    }
};
