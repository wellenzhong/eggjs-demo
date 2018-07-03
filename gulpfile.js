'use strict';
const gulp = require('gulp');
const less = require('gulp-less');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const minify = require('gulp-minify-css');
const babel = require('gulp-babel');
const path = require('path');
const LessAutoprefix = require('less-plugin-autoprefix');
const autoprefix = new LessAutoprefix({ browsers: [ 'last 2 versions' ] });
gulp.task('default', function() {
  // 将你的默认的任务代码放在这
  console.log('hello world!!');
});
gulp.task('less', function() {
  gulp.src('./client/src/less/**/*.less')
    .pipe(less({
      plugins: [ autoprefix ],
    }))
    .pipe(gulp.dest('./public/src/css'))
    .pipe(concat('styles.min.css'))
    .pipe(minify())
    .pipe(gulp.dest('./public/build/css'));
});
gulp.task('js', function() {
  gulp.src('./client/src/scripts/*.js')
    .pipe(babel({
      presets: [ 'env' ],
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./public/build/js'));
});
gulp.task('default', [ 'less', 'js' ]);
