// 'use strict';

// const gulp = require('gulp');
// const sass = require('gulp-dart-sass');
// const browserSync = require('browser-sync').create();

// // SASS TASK
// gulp.task('sass', function(){
//     return gulp.src('./assets/scss/**/*.scss', { sourcemaps: true })
//         .pipe(sass().on('error', sass.logError))
//         .pipe(gulp.dest('./assets/css', { sourcemaps: '.' }))
        
// });



// gulp.task('browsersyncReload', function(cb){
//     browserSync.reload();
//     cb();
// });


// gulp.task('watch', function(){
//     gulp.watch('./assets/scss/**/*.scss', gulp.series(['sass']));
// });


const {src, dest, watch, series} = require('gulp');
const sass = require('gulp-dart-sass');
const prefix = require('gulp-autoprefixer');
const minify = require('gulp-clean-css');
const terser = require('gulp-terser');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();

// SCSS

function compilescss(){
    return src('./assets/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(prefix())
        .pipe(minify())
        .pipe(dest('./assets/css'))
}

// JS

function jsmin(){
    return src('./assets/js/**/*.js')
        .pipe(terser())
        .pipe(dest('./assets/js'))
}

// images

function optimizeimg(){
    return src('./assets/img/**/*.{jpg,png,svg,gif}')
        .pipe(imagemin([
            imagemin.mozjpeg({ quality:80, progressive:true }),
            imagemin.optipng({ optimizationLevel:2 }),
        ]))
        .pipe(dest('/assets/img'))
}

// browserSync

function browserSyncServe(cb){
    browserSync.init({
        server: {
            baseDir: '.'
        }
    });
    cb();
}

function browsersyncReload(cb){
    browserSync.reload();
    cb();
}


// watch task

function watchTask() {
    watch('*.html', browsersyncReload)
    watch('assets/scss/**/*.scss', series(compilescss, browsersyncReload));
    watch('assets/js/**/*.js', series(jsmin, browsersyncReload));
    watch('assets/img/**/*.{jpg,png,svg,gif}', optimizeimg);
}

exports.default = series(
    compilescss,
    jsmin,
    optimizeimg,
    browserSyncServe,
    watchTask
);


