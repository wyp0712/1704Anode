/**
 *  1. 处理请求  get post
 *  2. 静态资源  html
 */
const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

http.createServer((req, res) => {
  let urlPath = req.url; // 请求地址带参数
  let method = req.method; // 请求方式
  let pathName = url.parse(urlPath).pathname; // 接口
  let extname = path.extname(pathName) // 后缀名  有后缀名就是静态资源
  pathName = pathName === '/' ? './demo.html' : pathName;
  // 有后缀名就是静态资源
  if (pathName) {
    if (extname === '.ico') {
      res.end('111')
      return;
    }
    let content = fs.readFileSync(path.join(__dirname, pathName))
    res.end(content)
  } else { // 没有后缀名就是接口

    // 判断是get 还是post 接口
    if (method === 'GET') {
      switch(urlPath) {
        case '/login':
         console.log(urlPath, 'get')
         res.end('get')
        break;
      }
    } else if (method === 'POST') {
      switch(urlPath) {
        case '/login':
            console.log(urlPath, 'post')
            res.end('post')
        break;
      }
    }
  }
}).listen(8080, () => {
  console.log(8080)
})