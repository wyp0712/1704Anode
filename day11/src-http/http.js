/**
 *  @param { 前端 ->主动  后端->被动 }
 * 
 *  @param { http }；
 *  1. 处理get请求  处理post请求
 *  2. 处理静态资源 html css js
 *  @param { 默认请求： 两次: '/'  '/favicon.ico' }
 *  @param { 地址是：'/' 后面 '?' 前面的东西 /login eg: /login?page=1&size=5}
 * 
 *  启动服务器：node index.js
 *  
 *  在浏览器中输入 
 *   127.0.0.1:3000/login
 *   localhost:3000/login
 *  怎么关闭服务器
 *    ctrl + c;
 * 
 *  @param { 在浏览器中输入一个url 回车，默认就是请求一次get接口， }
 *  
 */

const http = require('http');
const path = require('path');
const url = require('url'); // 处理地址的  parse  format  resolve
const querystring = require('querystring'); // 处理 地址栏参数 escade unescade
const fs = require('fs');
const PORT = 3000;


// 处理post的promise
const getPostData = (req) => {
  return new Promise((resolve, reject) => {
    let postData = '';
    req.on('data', (chunk) => {
      postData += chunk.toString()
    })
    // 监听结束
    req.on('end', () => {
      resolve(postData)
    })
  })
}

http.createServer((req, res) => {
  // res.end()
  // res 响应  给前端
  // 设置响应状态码和解析格式
  res.writeHead(200, { 'Content-type': 'text/html;charset=utf-8' })

  // req 请求  前端发过来的
  // res 响应  发送给前端的
  let urlPath = req.url; // 前端请求地址
  let method = req.method; // 前端请求方式
  let pathname = url.parse(req.url);
  let strParse = querystring.parse(req.url.split('?')[1]) // get方式传输过来的参数
  let address = urlPath.split('?')[0];

  // 处理get请求
  if (method === 'GET' && address === '/movie') {
    let { user, pwd } = strParse;
    fs.readFile('./user.json', 'utf-8', function (err, data) {
      let list = JSON.parse(data)
      let flag = list.some(item => {
        return item.user == user && item.pwd == pwd
      })
      if (flag) {
        res.end(JSON.stringify({
          code: 0,
          msg: 'success'
        })) // 字符串
      } else {
        res.end('请输入参数')
      }
    })
    // 当前接口响应完毕不让继续往下走了
    return;
  }

  // 处理post请求
  if (method === 'POST' && address === '/login') {
    // 一般来说，post参数 放在req.body
    getPostData(req).then(postData => {
      if (postData) {
        res.end(postData)
      }
    })
    // 当前接口响应完毕不让继续往下走了
    return;
    console.log('我是错误处理上的代码')
  }

  // 处理错误
  res.writeHead(404, { 'Content-type': 'text/html;charset=utf-8' })
  res.end(`<h1>${404} <hr> 找不到 </h1>`)

  // res.write(`<h1>请求方式：${method}<h1>`)
  // res.write(`<h1> <hr>  地址：${urlPath.split('?')[0]} <h1>参数：${urlPath.split('?')[1]} </h1></h1>`)
  // res.end() // 结束响应

}).listen(PORT, () => {
  console.log(PORT)
})



