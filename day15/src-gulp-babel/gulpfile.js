const gulp = require('gulp') // 
const sass = require('gulp-sass') // 编译sass
const cssmin = require('gulp-clean-css') // css压缩

const babel = require('gulp-babel') // 转成 es5
const jsmin = require('gulp-uglify') //  压缩
const htmlmin = require('gulp-htmlmin') // 压缩
const concat = require('gulp-concat') // 拼接
const webserver = require('gulp-webserver') // 起服务

const url = require('url')
const path = require('path')


/**
 *  gulp 
 * 
 *  gulp.task 开启任务
 *  src 找路径
 *  dest 写入
 *  pipe 输出
 *  
 *  watch
 * 
 * */

gulp.task('sass', () => {
  return gulp.src('./src/style/*.scss')
    .pipe(sass())
    //  .pipe(cssmin())
    .pipe(gulp.dest('./dist/style'))
})

gulp.task('cssConcat', () => {
  return gulp.src('./dist/style/*.css')
    .pipe(concat('all.css'))
    .pipe(gulp.dest('./dist/style'))
})

gulp.task('js', () => {
  return gulp.src('./src/js/*.js')
    // .pipe(jsmin())
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/js'))
})

gulp.task('html', () => {
  return gulp.src('./src/*.html')
    .pipe(htmlmin())
    .pipe(gulp.dest('./dist/'))
})

// 
gulp.task('webserver', () => {
  return gulp.src('./src')
    .pipe(webserver({
      port: 8000,
      livereload: true,
      open: true,
      proxies: [
        {
          source: '/', // 代理
          target: 'http://localhost:3000' // 代理目标
        }
      ],
      // 
      middleware: function (req, res, next) {
        console.log(req.method)
         // 前端  前端 + 工程师 =>  前端工程师  
        const address = url.parse(req.url).pathname;
        if (address === '/admin') {
          res.writeHead(200, {'Content-type': 'text/html;charset=utf-8'})
          res.end("fail")
        }
        next()
      }
    }))
})


gulp.task('default', gulp.series(['sass', 'cssConcat', 'js', 'html']))