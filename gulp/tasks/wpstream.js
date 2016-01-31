/*eslint-env node */
/*eslint strict: [2, "global"]*/

'use strict';

var config = require('../config');
var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('wp-stream', function() {

    if (!global.isProd) {
        return gulp.src(config.scripts.dest)
            .pipe(browserSync.stream({once: true}));
    }
});
