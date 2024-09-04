// TODO EDIT THIS
'use strict';
import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import gulpSass from 'gulp-sass';
import nodeSass from 'node-sass';
import newer from 'gulp-newer';
import autoprefixer from 'autoprefixer';
import postcss from 'gulp-postcss';

const
  dir = {
    src         : 'wp-content/themes/eval/src',
    build       : 'wp-content/themes/eval'
  }

// TODO EDIT
// image settings > minifies images
const images = {
  src         : dir.src + '/public/',
  build       : dir.build + '/public/'
};
// image processing
gulp.task('images', () => {
  return gulp.src(images.src)
    .pipe(newer(images.build))
    .pipe(imagemin())
    .pipe(gulp.dest(images.build));
});

//TODO EDIT THIS 
let css = {
  sass: gulpSass(nodeSass),
  src         : dir.src + '/styles/index.scss',
  watch       : dir.src + '/styles/*.scss',
  build       : dir.build+'/src/styles',
};
// CSS processing
gulp.task('css', () => {
  return gulp.src(css.src)
    .pipe(css.sass({outputStyle: 'nested'}))
    .on('error', sass.logError)
    .pipe(postcss([
      autoprefixer
    ]))
    .pipe(gulp.dest(css.build))
});

gulp.task('watch', () => {
  return gulp.watch(css.watch, gulp.series('css'))
})

gulp.task('build', gulp.series('css', 'watch'));