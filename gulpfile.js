const gulp = require('gulp'),
  webpack = require('gulp-webpack'),
  webpackStreem = require('webpack-stream'),
  typescript = require('typescript'),
  ts = require('gulp-typescript'),
  tsProject = ts.createProject('tsconfig.json', {typescript: typescript}),
  logger = require('gulp-logger'),
  browserify = require("browserify"),
  rename = require('gulp-rename'),
  del = require('del');
;

const popupSrc = 'popup/**/*.tsx';
const tempDir = './.tmp';

gulp.task('default', function () {
  return gulp.src(popupSrc)
    .pipe(tsProject())
    .js
    .pipe(gulp.dest(tempDir))
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(rename((path) => {
      path.basename = "popup";
      if (path.extname === '.map') {
        path.extname = '.js.map'
      }
    }))
    .pipe(gulp.dest('popup'))
    
});

gulp.task('watcher',function(){
  gulp.watch(popupSrc, ['default']);
});
