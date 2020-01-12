// Initialize modules
const { src, dest, watch, series, parallel } = require("gulp");

const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const concat = require("gulp-concat");
const postcss = require("gulp-postcss");
const replace = require("gulp-replace");
// const less = require("gulp-less");

const sass = require("gulp-sass");

const purgecss = require("gulp-purgecss");
const sourcemaps = require("gulp-sourcemaps");

const terser = require("gulp-terser");

// SCSS task
function scssTask() {
  return src("app/scss/style.scss")
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write("."))
    .pipe(dest("dist"));
}

// JS task
function jsTask() {
  return src("app/js/**/*.js")
    .pipe(concat("script.js"))
    .pipe(
      terser({
        keep_fnames: true,
        mangle: false
      })
    )
    .pipe(dest("dist"));
}

// Cachebusting task
const cbString = new Date().getTime();
function cacheBustTask() {
  return src(["*.html"])
    .pipe(replace(/cb=\d+/g, "cb=" + cbString))
    .pipe(dest("."));
}

// Watch task
function watchTask() {
  watch(["app/scss/**/*.scss", "app/js/**/*.js"], parallel(scssTask, jsTask));
}

// Deafult task
exports.default = series(parallel(scssTask, jsTask), cacheBustTask, watchTask);
