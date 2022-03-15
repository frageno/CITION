'use strict';

const gulp = require('gulp');
const sass = require('gulp-dart-sass');
const browserSync = require('browser-sync').create();


gulp.task('sass', function(){
    return gulp.src('./assets/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./assets/css'))
});

gulp.task('watch', function(){
    gulp.watch('./assets/scss/**/*.scss', gulp.series(['sass']));
});






