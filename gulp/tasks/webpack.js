/*eslint-env node */
/*eslint strict: [2, "global"]*/

'use strict';

var config = require('../config');
var gulp = require('gulp');
var webpack = require('gulp-webpack');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');

gulp.task('webpack', function() {

    return gulp.src(config.scripts.mainSrc)
        .pipe(webpack(require(config.webpackConfig)))
        .pipe(gulp.dest(config.buildDir))

        .pipe(gulpif(global.isProd, uglify({
            mangle: false,
            compress: {
                'drop_console': true
            }
        })))
        .pipe(gulpif(global.isProd, gulp.dest(config.buildDir)));
});
