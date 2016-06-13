/*jslint node: true */
'use strict';
var gulp = require('gulp');

var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

var babel = require('gulp-babel');

var jsFiles = 'js/src/**/*.js',
    jsDest = 'js/';

gulp.task('default', function () {
    return console.log('\n\nUse "gulp scripts" or "gulp css" to minify scripts or css\n\n');
});

gulp.task('scripts', function () {
    return gulp.src(jsFiles)
        .pipe(concat('script.main.js'))
        .pipe(babel({presets: ['es2015']}))
        .pipe(gulp.dest(jsDest))
        .pipe(rename('script.main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDest));
});

gulp.task('scripts:watch', function () {
    gulp.watch('./js/src/**/*.js', ['scripts']);
});
