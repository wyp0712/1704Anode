/**
 * @author devin 
 * created by devin in 2019-6-27 13:05
 */
const http = require('http')
const fs = require('fs')
const path = require('path')
const url = require('url')
const querystring = require('querystring')
const PORT = 9000

http.createServer(processRequest).listen(PORT, () => { console.log(`该服务器端口为：${PORT}`) })


function processRequest(req, res) {

  const MIME = {
    "css": "text/css",
    "gif": "image/gif",
    "html": "text/html;charset=utf-8",
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
  };

  const urlPath = req.url
  const method = req.method
  let pathname = url.parse(urlPath).pathname
  pathname = pathname === '/' ? '/exam.html': pathname
  const extname = path.extname(pathname).slice(1)
  const contenType = MIME[extname] || 'text/plain'
  let filePath = path.join(__dirname, pathname)

  if (extname) {
    extname  === 'ico' ? res.end('43') : null
    streamfile(filePath, contenType)
  } else {
    // 设置接口返回类型
    res.writeHead(200, { 'Content-Type': 'application/json' })
    req.query = querystring.parse(req.url.split('?')[1])
    if (method === 'GET' && pathname === '/exam') {
      let { data } = req.query;
      let flag = fs.appendFileSync(path.join(__dirname, '/exam.xlsx'), Buffer.from(data))
       fs.appendFileSync(path.join(__dirname, '/exam.txt'), data)
      if (!flag) {
        res.end(JSON.stringify({
          code: 0,
          msg: 'success'
        }))
      } else {
        res.end(JSON.stringify({
          code: -1,
          msg: 'fail'
        }))
      }
      return
      console.log(1)
    }
    res.writeHead(404, { 'Content-Type': 'text/html;charset=utf-8' })
    res.end('<h1>小哥哥，你的路径错误了，再试一个其他的吧</h1>')
  }

  function streamfile(filePath, contenType) {
    res.writeHead(200, { 'Content-Type': contenType })
    let stream = fs.createReadStream(filePath)
    stream.on('error', () => {
      res.writeHead(500, { 'Content-Type': 'text/html;charset=utf-8' })
      res.end('<h1>小哥哥，这个路径找错了</h1>')
    })
    stream.pipe(res)
  }
}

// 获取post参数
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

