/**
 * 
 */
const gulp = require('gulp');
const sass = require('gulp-sass');
const mincss = require('gulp-clean-css');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin'); // 压缩HTML  gulp-htmlmin

// const autoprefixer = require('gulp-autoprefixer');
// const server = require('gulp-webserver'); // gulp-webserver  创建web服务器
// const url = require('url');
// const path = require('path');
// const fs = require('fs');
// const bodyParser = require('body-parser'); // body-parser  处理post发过来的参数

/**
 * gulp的第三方包
 * gulp-sass  只能用淘宝镜像源  cnpm i gulp-sass -D  编译sass为css
 * gulp-clean-css npm i gulp-clean-css -D   压缩css文件
 * gulp-babel npm i gulp-babel -D  es6=>es5
 * gulp-uglify   npm i gulp-uglify -D
 */

 /**
 * 编译scss
 * 压缩css
 * 自动添加前缀  gulp-autoprefixer
 * 
 * es6=>es5
 * 压缩
 * 
 * 压缩HTML  gulp-htmlmin
 * 
 * gulp-webserver  创建web服务器
 * body-parser  处理post发过来的参数
 */


// gulp 加任务 执行

// 创建一个css任务 包括 
gulp.task('css', () => {
  return gulp.src('./src/scss/*.scss') // 找到需要被编译的scss文件
  .pipe(sass()) // 使用gulp-sass这个包去编译
  .pipe(mincss()) // 使用gulp-clean-css这个包压缩css文件
  .pipe(gulp.dest('./dist/css')) // 将编译好的css文件放置到哪里
});

gulp.task('js', () => {
  return gulp.src('./src/js/*.js')
  .pipe(babel({ // 使用gulp-babel 这个包es6=>es5
    presets: ['@babel/env']
  }))
  .pipe(uglify()) // 使用gulp-uglify这个包压缩js文件
  .pipe(gulp.dest('./dist/js'))// 将压缩编译好的js文件放入dist/js
})

//
gulp.task('html', () => {
  const options = {
      removeComments: true,//清除HTML注释
      collapseWhitespace: true,//压缩HTML
      collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
      removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
      removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
      removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
      minifyJS: true,//压缩页面JS
      minifyCSS: true//压缩页面CSS
  };
  return gulp.src('./src/*.html')
  .pipe(htmlmin(options)) //压缩HTML
  .pipe(gulp.dest('./dist'))
})

gulp.task('watch', () => {
  gulp.watch('./src/scss/*.scss',  gulp.series('css')) // 监听index.scss文件，只要有变化并保存，就执行css这个任务
  gulp.watch('./src/js/*.js', gulp.series('js'))
  gulp.watch('./src/*.html', gulp.series('html'))
})



