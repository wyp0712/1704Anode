const gulp = require('gulp')
const server = require('gulp-webserver')
const bodyParser = require('body-parser')
const fs = require('fs')
const url = require('url')
const path = require('path')
const querystring = require('querystring')


gulp.task('server', () => {
  gulp.src('app')
  .pipe(server({
    port: 7000,
    livereload: true,
    middleware: [
      bodyParser.json(), // 解析json格式数据
      bodyParser.urlencoded({ extended:false }), // 解析x-www-form-urlencoded格式数据
      (req, res, next) => {
        const method = req.method;
        const pathname = url.parse(req.url).pathname
        
        if (method === 'POST' && pathname === '/login') {
          console.log(req.body, 'body--------1')
          res.end(JSON.stringify(req.body))
        }
      
        if(method === 'GET' && pathname === '/admin') {

        }

        next()
      }
    ]
  }))
})