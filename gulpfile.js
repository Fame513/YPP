const gulp = require('gulp'),
  webpack = require('gulp-webpack'),
  webpackStreem = require('webpack-stream'),
  typescript = require('typescript'),
  ts = require('gulp-typescript'),
  tsProject = ts.createProject('tsconfig.json', {typescript: typescript}),
  tsServer = ts.createProject('server/tsconfig.json', {typescript: typescript}),
  logger = require('gulp-logger'),
  browserify = require("browserify"),
  rename = require('gulp-rename'),
  del = require('del'),
  requireModules = require('gulp-require-modules')
  gulpCopy = require('gulp-copy');

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

gulp.task('build', ['build:plugin', 'build:server']);

gulp.task('build:plugin', ['build:plugin:popup', 'build:plugin:background', 'copy']);

gulp.task('build:plugin:popup', function () {
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
    .pipe(gulp.dest('dist/plugin/popup'))
});

gulp.task('copy', ['copy:manifest', 'copy:scripts', 'copy:content', 'copy:popup.html']);

gulp.task('copy:manifest', function () {
  gulp
    .src('manifest.json')
    .pipe(gulpCopy('dist/plugin'))
});

gulp.task('copy:scripts', function () {
  gulp
    .src('scripts/**')
    .pipe(gulpCopy('dist/plugin'))
});

gulp.task('copy:content', function () {
  gulp
    .src('content/**')
    .pipe(gulpCopy('dist/plugin'))
});

gulp.task('copy:server', function () {
  gulp
    .src(['server/package.json', 'server/yppy-firebase.json'])
    .pipe(gulpCopy('dist/plugin'))
});

gulp.task('copy:popup.html', function () {
  gulp
    .src('popup/popup.html')
    .pipe(gulpCopy('dist/plugin'))
});

gulp.task('build:plugin:background', ['build:plugin:popup'], function () {
  return gulp.src('background/background.ts')
    .pipe(tsProject())
    .js
    .pipe(gulp.dest('dist/plugin/background'))
});

gulp.task('build:server', function () {
  return gulp.src('server/*.ts')
    .pipe(tsServer())
    .js
    .pipe(gulp.dest('dist/server'))
});

gulp.task('watcher',function(){
  gulp.watch(popupSrc, ['default']);
});
