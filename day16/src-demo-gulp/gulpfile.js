const gulp = require('gulp')
const url = require('url')
const path = require('path')
const querystring = require('querystring')
const server = require('gulp-webserver')

const connect = require('gulp-connect')
const bodyParser = require('body-parser')
const { readfile } = require('./utils/util')
const { SuccessModel, FailModel } = require('./model/resModel')

/**
 * 
 * 1. 静态文件
 * 2. 接口
 */


gulp.task('web', () => {
  gulp.src('src')
    .pipe(server({
      port: 7000,
      livereload: true, // 自动刷新
      middleware: [
        bodyParser.urlencoded({ extended: false  }),
        (req, res, next) => {
          const method = req.method;
          const urlPath = req.url;
          const pathname = url.parse(urlPath).pathname;
          const getparams = req.url.split('?')[1]
          if (pathname === '/list') {
            console.log(getparams)
            res.end()
          }

          if (method === 'POST'  && pathname === '/login') { 
              
            // console.log(req.body, 'post参数')

            res.end()

          }
        }
      ]
      // middleware: function (req, res, next) {

      //   const method = req.method;
      //   const urlPath = req.url;
      //   const pathname = url.parse(urlPath).pathname;
      //   const getparams = req.url.split('?')[1]
      //   if (method === 'GET' && pathname === '/list') {
      //     return readfile('./mock/movie.json').then(movielist => {
      //       res.end(movielist)
      //       return;
      //     })
      //   }

      //   if (method === 'POST'  && pathname === '/login') {
      //     // console.log(res)
      //     getPostData(req).then(list => {
      //       console.log(list)
      //       res.end(JSON.stringify(list))
      //     })
      //   }
      //   // next()
      // }
    }))
})





// .pipe(server({
//   port: 7000,
//   livereload: true, // 自动刷新
//   // open: true, // 自动打开页面
//   middleware: function (req, res, next) {

//     const method = req.method;
//     const urlPath = req.url;
//     const pathname = url.parse(urlPath).pathname;
//     const getparams = req.url.split('?')[1]
//     // get参数
//     // console.log(pathname, 'pathname') 

//     if (method === 'GET' && pathname === '/list') {
//       console.log('我是list接口')
//       console.log(getparams, 'getparams')

//       // res.end('movielist')

//      return readfile('./mock/movie.json').then(movielist => {
//         res.end(movielist)
//         return;
//       })
//     }

//     if (method === 'POST' && pathname === '/admin') {

//       console.log(res, 'rs')

//       res.end('我是post接口')
//       //  getPostData(req).then(resPost => {
//       //   let {user , pwd} = resPost
//       //   return readfile('./mock/user.json').then(userData => {



//       //     // // console.log(userData, 'userData')
//       //     //  let list = JSON.parse(userData)
//       //     //  let flag =  list.some(item => {
//       //     //     return item.user === user && item.pwd === pwd
//       //     //  })
//       //     // //  console.log(flag, 'falg')
//       //     //  if(flag) {
//       //     //    console.log(flag, 'post---flag')
//       //     //    console.log(res, 'res--------1')
//       //     //    console.log(res.statusMessage, 'res ===========1')
//       //     //    res.end('sucess')

//       //     //   //  console.log(new SuccessModel('登陆成功'), '---------success')
//       //     //   //  res.end(JSON.stringify(new SuccessModel('登陆成功')))
//       //     //  } else {
//       //     //   res.end(JSON.stringify(new FailModel('fail')))
//       //     //  }
//       //     //  return;
//       //   })
//       // })

//       // console.log('----------1')
//     }
//     next()
//   }
// }))
// }) 


function getPostData(req) {
  return new Promise((resolve, reject) => {
    let postData = ''
    req.on('data', (chunk) => {
      postData += chunk.toString()
    })
    req.on('end', () => {
      resolve(JSON.parse(postData))
    })
  })
}