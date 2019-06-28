const gulp = require('gulp');
const sass = require('gulp-sass'); // 编译scss css
const mincss = require('gulp-clean-css');  // 压缩css
const babel = require('gulp-babel'); // es6 - es5
const uglify = require('gulp-uglify'); // js
const htmlmin = require('gulp-htmlmin'); // 压缩HTML  gulp-htmlmin
const webserver = require('gulp-webserver'); // task src pipe dest 
const concat = require('gulp-concat')
const bodyParser = require('body-parser')
const url = require('url')
const { readfile } = require('./utils/index')
const querystring = require('querystring')

const path = require('path')



// css 编译 压缩

gulp.task('sass', () => {
  return gulp.src('./app/css/*.scss')
    .pipe(sass())
    .pipe(mincss())
    .pipe(gulp.dest('./dist/css'))
})
// js

gulp.task('js', () => {
  return gulp.src('./app/js/*.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/js'))
})

/**
 * 
 *     .pipe(babel({ // 使用gulp-babel 这个包es6=>es5
      presets: ['@babel/env']
    }))
 *  */

// html
gulp.task('html', () => {
  return gulp.src('./app/*.html')
    .pipe(htmlmin())
    .pipe(gulp.dest('./dist'))
})


gulp.task('webserver', () => {
  gulp.src('app')
  .pipe(webserver({
    port: '8000',
    livereload: true,
    // open:true
    middleware: [
      bodyParser.json(),
      bodyParser.urlencoded({ extended:false }),
      (req, res, next) => {
        const method = req.method;

        // 解析get参数
        req.query = querystring.parse(decodeURI(req.url).split('?')[1])
        // 请求地址
        const pathname = url.parse(req.url).pathname
        res.writeHead(200, {'Content-Type': 'application/json'})
        // 接口
        if (method === 'GET' && pathname === '/provice') {
     
          let { provice } = req.query
          let pro = []
          return readfile(path.join(__dirname, 'mock/stroe.json')).then(store => {
            let list = JSON.parse(store)
            list.forEach(item => {
               pro.push(item.name)
            })
            res.end( JSON.stringify(pro) )
          })
        }

        if(method === 'GET' && pathname === '/city') {
          let { provice } = req.query;
          return readfile(path.join(__dirname, 'mock/stroe.json')).then(store => {
            let list = JSON.parse(store)
            let data = list.filter(item => {
              if (item.name === provice) {
                return item.city
              }
            })
            res.end( JSON.stringify(data) )
          })


        }


        next()
      }
    ]
  }))
})

gulp.task('default', gulp.series('sass', 'js', 'html', 'webserver'))











