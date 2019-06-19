/**
 *  @param { 服务端 }
 * 
 *  1. 服务- 加载前端内容 静态资源 （静态资源服务器）
 *  2. 接口功能 （登陆 注册 分页）
 * 
 */

const http = require('http')
const fs = require('fs')
const url = require('url') // 处理req.url url.parse(req.url)
const path = require('path') // 处理路径
const querystring = require('querystring'); // 处理参数 'name=d&age=12' querystring.parse(str)
const PORT = 8000

const { SuccessModel, FailModel } = require('./model/resModel')

http.createServer(processRequest).listen(PORT, () => { console.log(PORT) })


function processRequest(req, res) {
  // mime类型 // 解析类型
  var MIME = {
    "css": "text/css",
    "gif": "image/gif",
    "html": "text/html",
    "ico": "image/x-icon",
    "jpeg": "image/jpeg",
    "jpg": "image/jpeg",
    "js": "text/javascript",
    "json": "application/json",
    "pdf": "application/pdf",
    "png": "image/png",
    "svg": "image/svg+xml",
    "swf": "application/x-shockwave-flash",
    "tiff": "image/tiff",
    "txt": "text/plain",
    "wav": "audio/x-wav",
    "wma": "audio/x-ms-wma",
    "wmv": "video/x-ms-wmv",
    "xml": "text/xml",
    "manifest": "text/cache-manifest"
  }

  let requrl = req.url
  let method = req.method
  let pathname = url.parse(requrl).pathname
  let getParams = querystring.parse(requrl.split('?')[1])
  /**
   *   @param { / }
   *   @param { /favicon.ico }
   *   给一个默认渲染页面
   * */
  pathname = pathname === '/' ? '/index.html' : pathname;

  // 拼接路径  用来读取文件
  let filePath = path.join(__dirname, '../', '/movie-app', pathname)
  // 用来获取后缀名 如果是接口 没有后缀名  反之亦然
  let extname = path.extname(pathname).slice(1) // js css jpg
  // 处理静态资源类型 eg: text/plain  text/html
  let contentType = MIME[extname] || 'text/plain'

  if (extname) { // 处理静态资源
    // if (extname === 'ico') {
    //   res.end()
    //   return;
    // }
    readefile(filePath, contentType)
  } else { // 处理接口
    // 首先判断请求方式 get post
    if (method === 'GET') {
      switch (pathname) {
        case "/movie":
          // 获取前端参数
          let { page, size } = getParams;
          readefileSmall('./page.json').then(list => {
            let filtData = list.movieList.filter((n, index) => index >= page * 1 * size * 1 && index < (page * 1 + 1) * size * 1);
            res.end(JSON.stringify(new SuccessModel(filtData)))
          })
          break;
        default:
          let filePath = path.join(__dirname, '../', '/movie-app', '/404.html')
          res.end(fs.readFileSync(filePath))
      }
    } else if (method === 'POST') {

      getPostData(req).then(postData => {
        // 登陆接口  验证 
        switch (pathname) {
          case "/login":
            // 前端传输过来的
            if (postData) {
              let { user, pwd } = JSON.parse(postData) // 前端传输过来的是字符串
              readefileSmall('./user.json').then(userData => {
                if (userData) {
                  let loginStatus = userData.some((item) => {
                    return item.user == user && item.pwd == pwd
                  })
                  if (loginStatus) {
                    // 给前端必须转成字符串
                    res.end(JSON.stringify(new SuccessModel('success')))
                  } else {
                    res.end(JSON.stringify(new FailModel('fail')))
                  }
                }
                //
                return;
              })
            }
            break;
          case "/register": // 注册接口，添加数据
            if (postData) {
              let registerList = JSON.parse(postData)
              readefileSmall('./user.json').then(userData => {
                userData.push(registerList)

                fs.writeFile('./user.json', JSON.stringify(userData), function (err, data) {
                  console.log(data, 'data')
                  res.end(JSON.stringify(new SuccessModel('注册成功')))
                })

                // fs.writeFileSync('./user.json', JSON.stringify(userData))
                // res.end(JSON.stringify(new SuccessModel('注册成功')))
              })
            }
            break;
          default:
            let filePath = path.join(__dirname, '../', '/movie-app', '/404.html')
            res.end(fs.readFileSync(filePath))
        }
      })
    }
  }

  // 大文件读取
  function readefile(readepath, contentType) {
    res.writeHead(200, { 'Content-type': contentType })
    let stream = fs.createReadStream(readepath)
    stream.on('error', function () {
      res.writeHead(500, { "content-type": contentType });
      res.end("<h1> 500 Server Error</h1>");
    });
    stream.pipe(res)
  }
}

// 读取文件
function readefileSmall(src) {
  return new Promise((resolve, reject) => {
    fs.readFile(src, function (err, fileData) {
      if (err) {
        reject(err)
        return
      }
      resolve(JSON.parse(fileData))
    })
  })
}

// function writefileFn(src, content) {
//   return new Promise((resolve, reject) => {
//     fs.writeFile(src, content, function (err, data) {
//       if (err) {
//         reject(err)
//         return
//       }
//       resolve(JSON.parse(data))
//     })
//   })
// }

// 处理postData
function getPostData(req) {
  return new Promise((resolve, reject) => {
    let postData = ''
    req.on('data', (chunk) => {
      postData += chunk.toString()
    })
    req.on('end', () => {
      resolve(postData)
    })
  })
}

