/**
 * 
 *  @author { devin }
 *   1. 静态资源  index.html  imag.jpg  index.css index.js
 *   2. 接口  /movie  /api 
 *   @param { /  /favicon.ico}
 */
const http = require('http');
const url = require('url');
const path = require('path');
const querystring = require('querystring');
const fs = require('fs');
const PORT = 3000;
// 路由处理函数
const handleLoginRouter = require('./router/login');
const handleAdminRouter = require('./router/admin');

http.createServer(processRequest).listen(PORT, () => { console.log(`http://localhost:${PORT}`) })

const MIME = {
  'html': 'text/html',
  'css': 'text/css',
  'js': 'text/javascript',
  'png': 'img/png'
}

function processRequest(req, res) {

  const urlPath = req.url;// 请求地址
  let pathName = url.parse(urlPath).pathname;
  pathName = pathName === '/' ? '/index.html' : pathName;
  const extname = path.extname(pathName).slice(1);// 获取后缀名
  let filepath = path.join(__dirname, '../', 'login-app', pathName);// 获取文件路径
  let contentType = MIME[extname] || 'text/plain'// 获取文件解析类型

  
  req.query = querystring.parse(urlPath.split('?')[1]) // 放置get参数

  if (extname) { // 静态资源
    streamFile(filepath, contentType)
  } else { // 接口  处理接口 就是先想办法获取参数  1. get querstring(url)获取 2. 请求体获取
    res.writeHead(200, { 'Content-type': 'text/html;charset=utf-8' })
    
    getPostData(req, res).then(postData => {

      req.body = querystring.parse(postData); // post参数 将请求到的post参数放置在body上
      
      // 登陆
      let loginData = handleLoginRouter(req, res);
      if (loginData) {
        loginData.then(listData => {
          if (listData) {
            res.end(JSON.stringify(listData))
          }
        })
        // 数据返回给前端就不让代码继续往下运行了
        return;
        console.log('我执行完函数了')
      }

      // admin权限控制
      let adminData = handleAdminRouter(req, res);
      if (adminData) {
        adminData.then(resData => {
          if (resData) {
            // console.log(JSON.stringify(resData), 'resData===========1')
            res.end(JSON.stringify(resData))
          }
        })
        return;
        console.log('hellow rodl')
      }

      // 未命中路由
      res.writeHead(404, { 'Content-type': 'text/html;charset=utf-8' })
      res.end('<h1>-------404</h1>')
    })
  }

  function streamFile(pathfile, contentType) {
    // contentType = contentType == 'text/html' ? 'text/html;charset=utf-8' : null;
    res.writeHead(200, { 'Content-type': contentType })// 设置响应信息
    let stream = fs.createReadStream(pathfile)
    stream.on('error', () => {
      res.writeHead(404, { 'Content-type': 'text/html;charset=utf-8' })
      res.end('<h1> 404 <hr> 找不到页面 </h1>')
    })
    stream.pipe(res)
  }
}


// 获取postData参数
function getPostData(req, res) {
  return new Promise((resolve, reject) => {
    let postData = '';
    req.on('data', (chunk) => {
      postData += chunk.toString()
    })
    req.on('end', () => {
      resolve(postData)
    })
  })
}



