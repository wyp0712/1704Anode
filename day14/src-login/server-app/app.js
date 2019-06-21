
const http = require('http');
const url = require('url');
const path = require('path');
const querystring = require('querystring');
const fs = require('fs');
const PORT = 3000;
http.createServer(processRequest).listen(PORT, () => { console.log(`http://localhost:${PORT}`) })
/**
 *   1. 静态资源  index.html  imag.jpg  index.css index.js
 *   2. 接口  /movie  /api 
 *   @param { /  /favicon.ico}
 */
const MIME = {
  'html': 'text/html',
  'css': 'text/css',
  'js': 'text/javascript',
  'png': 'img/png'
}

function processRequest(req, res) {
  const urlPath = req.url;
  // 请求地址
  let pathname = url.parse(urlPath).pathname;
  pathname = pathname === '/' ? '/index.html' : pathname;
  // 获取后缀名
  const extname = path.extname(pathname).slice(1);
  // 获取文件路径
  let filepath = path.join(__dirname, '../', 'login-app', pathname);
  // 获取文件解析类型
  let contentType = MIME[extname] || 'text/plain'

  if (extname) { // 静态资源
    streamFile(filepath, contentType)
  } else { // 接口

  }

  function streamFile(pathfile, contentType) {
    // 设置响应信息
    res.writeHead(200, { 'Content-type': contentType })
    let stream = fs.createReadStream(pathfile)
    stream.on('error', () => {
      res.writeHead(404, { 'Content-type': 'text/html;charset=utf-8' })
      res.end('<h1> 404 <hr> 找不到页面</h1>')
    })
    stream.pipe(res)
  }

  // res.end('hello world 上海市')
}


