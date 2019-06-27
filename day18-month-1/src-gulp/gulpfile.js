const gulp = require('gulp');
const sass = require('gulp-sass'); // 编译scss css
const mincss = require('gulp-clean-css');  // 压缩css
const babel = require('gulp-babel'); // es6 - es5
const uglify = require('gulp-uglify'); // js
const htmlmin = require('gulp-htmlmin'); // 压缩HTML  gulp-htmlmin
const webserver = require('gulp-webserver'); // task src pipe dest 
const concat = require('gulp-concat')
const bodyParser = require('body-parser')


gulp.task('sass', () => {
  gulp.src('./app/sass/*.scss')
  .pipe('./dist/css')
})

gulp.task('js', () => {

})

gulp.task('html', () => {

})

gulp.task('webserver', () => {

})







