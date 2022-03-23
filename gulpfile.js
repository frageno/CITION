'use strict';

const gulp = require('gulp');
const sass = require('gulp-dart-sass');
const browserSync = require('browser-sync').create();

// SASS TASK
gulp.task('sass', function(){
    return gulp.src('./assets/scss/**/*.scss', { sourcemaps: true })
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./assets/css', { sourcemaps: '.' }))
        
});



gulp.task('browsersyncReload', function(cb){
    browserSync.reload();
    cb();
});


gulp.task('watch', function(){
    gulp.watch('./assets/scss/**/*.scss', gulp.series(['sass']));
});






