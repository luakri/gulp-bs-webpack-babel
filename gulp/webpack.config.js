/*eslint-env node */
/*eslint strict: [2, "global"]*/

'use strict';

var config = require('./config');

var configDev = {
    entry: config.scripts.mainSrc,
    output: {
        filename: config.scripts.mainDest
    },
    debug: true,
    devtool: 'inline-source-map',
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};

var configProd = {
    entry: config.scripts.mainSrc,
    output: {
        filename: config.scripts.mainDest
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};

module.exports = (global.isProd) ? configProd : configDev;
