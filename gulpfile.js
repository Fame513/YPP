const gulp = require('gulp');
const webpack = require('gulp-webpack');

gulp.task('default', function() {
  return gulp.src('popup/index.tsx')
    .pipe(webpack())
    .pipe(gulp.dest('dist/'));
});