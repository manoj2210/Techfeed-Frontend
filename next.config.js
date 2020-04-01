const withCSS = require('@zeit/next-css');
const withSourceMaps = require('@zeit/next-source-maps');
require('dotenv').config();
const webpack = require('webpack');

module.exports = withCSS(
    withSourceMaps({
        webpack(config, _options) {
            // Fixes npm packages that depend on `fs` module
            config.node = {
                fs: 'empty'
            };
            /**
             * Returns environment variables as an object
             */
            const env = Object.keys(process.env).reduce((acc, curr) => {
                acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
                return acc;
            }, {});

            /** Allows you to create global constants which can be configured
             * at compile time, which in our case is our environment variables
             */
            config.plugins.push(new webpack.DefinePlugin(env));
            return config;
        }
    })
);
