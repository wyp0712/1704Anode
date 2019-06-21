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

const handerMovieRouter = require('./router/movie')
const handleUserRouter = require('./router/user')

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
  let pathname = url.parse(requrl).pathname

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
    getPostData(req).then(postData => {
      res.writeHead(200, { 'Content-type': 'application/json;charset=utf-8' })
      req.body = postData;
      // 处理user注册
      const userList = handleUserRouter(req, res)
      if (userList) {
        userList.then(userData => {
          res.end(JSON.stringify(userData))
        })
        return;
      }

      const movieData = handerMovieRouter(req, res)
      if (movieData) {
        movieData.then(data => {
          if (data) {
            res.end(JSON.stringify(data))
          }
        })
        return;
      }
      res.writeHead('404', {'Cotent-type': 'text/html;charset=utf-8'})
      res.end('<h1>no Found</h1>')
    })
  }
  // 大文件读取
  function readefile(readepath, contentType) {
 
    contentType = contentType === 'text/html' ? contentType + ';charset=utf-8' : contentType
    console.log(contentType, 'contentType')
    res.writeHead(200, { 'Content-type': contentType })
    let stream = fs.createReadStream(readepath)
    stream.on('error', function () {
      res.writeHead(404, { "content-type": `${contentType};charset=utf-8` });
      res.end("<h1> 404 找不到页面</h1>");
    });
    stream.pipe(res)
  }
}

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

