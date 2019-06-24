const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');

http.createServer(processRequest).listen(5500, () => { console.log(5500) })

console.log(path.join("/temp", 'node', '/js/test.js/'), '-----1')
const userData = [
  {
    "user": "hello",
    "pwd": 123
  },
  {
    "user": "jjj",
    "pwd": 123
  }
]

function processRequest(req, res) {
  const methd = req.method;
  const urlPath = req.url;
  const address = url.parse(urlPath).pathname
  let extname = path.extname(address)

  // if (extname) {



  // } else {
    
    if (methd === 'GET' && address === '/checkcode') {
      let randomStr = Math.random().toString(32).slice(2, 6)
      res.end(randomStr)
    }

    if (methd === 'POST' && address === '/login') {
      getPostData(req).then(postData => {
        let { user, pwd } = JSON.parse(postData)
        let loginStatus = userData.some(item => {
          return item.user === user && item.pwd === pwd
        })
        if (loginStatus) {
          res.end(JSON.stringify({
            msg: '登陆成功',
            code: 0
          }))
        } else {
          res.end(JSON.stringify({
            msg: '登陆失败',
            code: -1
          }))
        }
      })
    }
  // }

  // function filefn(path, ContenType) {
  //   let stream = fs.createReadStream(path)
  //   stream.pipe(res)
  // }
  // 未命中路由的时候
  res.writeHead(404, { 'Content-type': 'text/html;charset=utf-8' })
  res.end('<h1>404</h1>')

}


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