
const gulp = require('gulp');
const sass = require('gulp-sass'); // 编译scss css

const mincss = require('gulp-clean-css');  // 压缩css
const babel = require('gulp-babel'); // es6 - es5
const uglify = require('gulp-uglify'); // js
const htmlmin = require('gulp-htmlmin'); // 压缩HTML  gulp-htmlmin
// task src pipe dest 
const webserver = require('gulp-webserver');

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
// sass
gulp.task('sass', () => {
  return gulp.src('./src/static/style/*.scss')
    .pipe(sass()) // 编译sass
    .pipe(mincss()) // 压缩css
    .pipe(gulp.dest('./dist/static/style'))  // 输出到dist
})

// js 任务
gulp.task('js', () => {
  return gulp.src('./src/static/js/*.js')
    .pipe(babel({ // 使用gulp-babel 这个包es6=>es5
      presets: ['@babel/env']
    }))
    .pipe(uglify())  // js 压缩
    .pipe(gulp.dest('./dist/static/js')) // 输出到
})

// html
gulp.task('html', () => {
  return gulp.src('./src/static/*.html')
    .pipe(htmlmin()) // html压缩
    .pipe(gulp.dest('./dist/static'))
})

// 监听任务 
gulp.task('watch', () => {
  gulp.watch('./src/static/style/*.scss', gulp.series('sass')) // 监听文件，只要文件有变化，就执行sass任务
  gulp.watch('./src/static/js/*.js', gulp.series('js'))
  gulp.watch('./src/static/*.html', gulp.series('html'))
})


// 起服务
gulp.task('webserver', () => {
  gulp.src('./src/static')
    .pipe(webserver({
      livereload: true, //实时刷新
      open: true,
      port: 3000,
      proxies: [
        {
          source: '/api', target: 'http://127.0.0.1:8000'
        }
      ],
      filter: function () {

      },
      //对请求进行拦截
      middleware: function (req, res, next) {
        //req:发送的请求  //res:需要接受响应的对象
        //next:指向下一步操作的指针
        // console.log(req, res, next)
        console.log('middleware')
        console.log(req.url)
        // var urlObj = url.parse(req.url, true);
        // console.log(urlObj.pathname);
        // if (urlObj.pathname == '/data/json.json') {
        //   //设置响应头
        //   res.setHeader('Content-Type', 'application/json');
        //   //读取文件
        //   fs.readFile('json/data.json', 'utf-8', function (err, data) {
        //     //将文件的数据设置为响应的数据
        //     res.end(data);
        //   });
        //   return;
        // }
        //放网页继续进行
        next();
      }
    }))
})

// gulp.series('sass', 'js', 'html')
gulp.task('default', gulp.series('sass', 'js', 'html'))





