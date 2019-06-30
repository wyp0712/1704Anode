const gulp = require('gulp')

const sass = require('gulp-sass')
const cssmin = require('gulp-clean-css')
const uglify = require('gulp-uglify')
const htmlmin = require('gulp-htmlmin')
const babel = require('gulp-babel')
const server = require('gulp-webserver')
const concat = require('gulp-concat')
const bodyParser = require('body-parser')

const url = require('url')
const path = require('path')
const querystring = require('querystring')


// css  sass编译  压缩  拼接
// gulp.task('sass', () => {
//   return gulp.src('./app/scss/*.scss')
//   .pipe(sass())
//   .pipe(cssmin())
//   .pipe(concat('all.css'))
//   .pipe(gulp.dest('./dist/css'))
// })

// js
// gulp.task('js', () => {
//   return gulp.src('./app/js/*.js')
//   .pipe(uglify())
//   .pipe(babel({
//     presets: ['@babel/env']
//   }))
//   .pipe(concat('all.js'))
//   .pipe(gulp.dest('./dist/js'))
// })
// html
// gulp.task('html', () => {
//   return gulp.src('./app/*.html')
//   .pipe(htmlmin())
//   .pipe(gulp.dest('./dist'))
// })

gulp.task('server', () => {
  return gulp.src('app')
  .pipe(server({
     port: 8000,
     livereload: true,
     open:true,
     middleware: [
       bodyParser.json(),
       bodyParser.urlencoded({ extended:false }),
       (req, res, next) => {
        // 获取请求方式
        const method = req.method;
        // 获取请求地址
        const pathname = url.parse(req.url).pathname
        // 获取后缀名
        const extname = path.extname(pathname).slice(1)
        // 获取get参数 // 防止url汉子乱码
        req.query = querystring.parse(decodeURI(req.url).split('?')[1])

          if (method === 'GET' && pathname === '/list') {

            // res.writeHead(200, { 'Content-Type': 'application/json' })

            res.end(JSON.stringify({
              code: 0,
              msg: 'success'
            }))
          }
        next()
       }
     ]
  }))
})


// gulp.task('watch', () => {
//   gulp.watch('./app/scss/*.scss',  gulp.series('sass'))
// })

// gulp.task('default', gulp.series('sass', 'js', 'server'))








