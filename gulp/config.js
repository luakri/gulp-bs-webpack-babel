/*eslint-env node */
/*eslint strict: [2, "global"]*/

'use strict';

module.exports = {

    browserPort: 9000,
    UIPort: 9001,

    sourceDir: './app/',
    buildDir: './dist/',

    webpackConfig: '../webpack.config.js',

    scripts: {
        src: './app/js/**/*.js',
        mainSrc: './app/js/main.js',
        mainDest: 'js/main.js',
        dest: 'dist/js'
    },

    lintScripts: {
        src: [
            'app/js/**/*.js',
            '!app/js/external/*.js',
            'gulp/**/*.js',
            'gulpfile.js'
        ]
    },

    views: {
        src: './app/*.html',
        dest: './dist/'
    },

    sass: {
        src: './app/sass/**/*.scss',
        dest: './dist/css',

        devOptions: {
            errLogToConsole: true,
            outputStyle: 'expanded',
            includePaths: ['./app/sass']
        },

        prodOptions: {
            errLogToConsole: true,
            outputStyle: 'compressed',
            includePaths: ['./app/sass']
        }
    },

    images: {
        src: 'app/images/**/*.{gif,jpeg,jpg,png,ico}',
        dest: 'dist/images'
    },

    gzip: {
        src: 'dist/**/*.{html,xml,json,css,js,js.map,css.map}',
        dest: 'dist/',
        options: {}
    }
};
