import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import gulpSass from 'gulp-sass';
import nodeSass from 'node-sass';
import newer from 'gulp-newer';
import autoprefixer from 'autoprefixer';
import postcss from 'gulp-postcss';
import cleanCSS from 'gulp-clean-css';
import GulpUglify from 'gulp-uglify';

const
  baseDir = {
    src         : 'wp-content/themes/eval/src',
    build       : 'wp-content/themes/eval'
  }

// minifies images used in repo
const imageDir =  baseDir.src + '/public/images/';

gulp.task('images', () => {
  return gulp.src(imageDir)
  // passes in only new images
    .pipe(newer(imageDir))
    // minifies
    .pipe(imagemin())
    .pipe(gulp.dest(imageDir));
});

// compiles SASS files into minified CSS
const cssDir = {
  src         : baseDir.src + '/public/styles/index.scss',
  watch       : baseDir.src + '/public/styles/*.scss',
  build       : baseDir.build+'/src/public/styles',
};

const sass = gulpSass(nodeSass);

gulp.task('css', () => {
  return gulp.src(cssDir.src)
    .pipe(sass({outputStyle: 'nested'}))
    // logs error 
    .on('error', sass.logError)

    // parses sass to css
    .pipe(postcss([
      autoprefixer
    ]))

    // minifies css
    .pipe(cleanCSS())
    .pipe(gulp.dest(cssDir.build))
});

// watches for changes in css files to automatically update css
gulp.task('watch', () => {
  return gulp.watch(cssDir.watch, gulp.series('css'))
})

// minifies js file
const jsDir = baseDir.src + '/helpers';

gulp.task('js', () => {
  return gulp.src(jsDir)
    // minifies js files
    .pipe(GulpUglify())
    .pipe(gulp.dest(jsDir))
});

// kicks off initial css compliation and watches for any additional changes to css file
gulp.task('build', gulp.series('css', 'js', 'images', 'watch'));