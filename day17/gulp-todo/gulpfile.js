const gulp = require('gulp')
const sass = require('gulp-sass')
const cssmin = require('gulp-clean-css')
const htmlmin = require('gulp-html-minify')
const jsmin = require('gulp-uglify')
const babel = require('gulp-babel')
const webserver = require('gulp-webserver')
const bodyParser = require('body-parser')
const url = require('url')
const path = require('path')
const fs = require('fs')
const querystring = require('querystring')
const { readfile } = require('./utils/util')


gulp.task('webserver', () => {
  gulp.src('public')
    .pipe(webserver({
      port: 8000,
      livereload: true, // reload
      middleware: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: false }),
        (req, res, next) => {
          const method = req.method;
          const pathname = url.parse(req.url).pathname;
          req.query = querystring.parse(req.url.split('?')[1])

          
          if (method === 'POST' && pathname === '/login') {
            let { user, pwd } = req.body
            console.log(req.body), ''
            return readfile('./mock/user.json').then(list => {
              let loginlist = JSON.parse(list)
              let flag = loginlist.some(item => {
                return item.user === user && item.pwd === pwd
              })
              console.log(flag, 'flag')
              if (flag) {
                res.end(JSON.stringify({
                  code: 0,
                  msg: 'success'
                }))
              } else {
                res.end(JSON.stringify({
                  code: -1,
                  msg: '请输入正确的账号或者密码'
                }))
              }
              return
              console.log('3')
            })
          }
          if (method === 'POST' && pathname === '/register') {
            let { user, pwd } = req.body
            return readfile('./mock/user.json').then(list => {
              let registerList = JSON.parse(list)
              let flag = registerList.some(item => {
                return item.user === user
              })
              if (flag) {
                res.end(JSON.stringify({
                  code: -1,
                  msg: '用户名已经存在，请重新注册'
                }))
              } else {
                registerList.push({
                  user: user,
                  pwd: pwd
                })
                let writeStatus = fs.writeFileSync('./mock/user.json', JSON.stringify(registerList))
                if (!writeStatus) {
                  res.end(JSON.stringify({
                    code: 0,
                    msg: '注册成功，请登录'
                  }))
                }
              }
              return
              console.log('3')
            })
          }

          next()
        }
      ]
    }))
})

