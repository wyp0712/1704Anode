// 内置模块

const http = require('http');
const PORT = '3000'


const server = http.createServer((req, res) => {
  // request   req 
  // response  res
  console.log(req.url, 'req')
  //  console.log(req.method, 'method')
  //  console.log(req.httpVersion, 'httpVersion:')
  res.writeHead(200, { "Content-type": "text/html" })

  if (req.method === 'GET') {
    switch (req.url) {
      case '/movie':
        res.end('movie---1')
        break;
      case '/login':
        res.end('login---1')
        break;
    }
  } else if (req.method === 'POST') {
    switch (req.url) {
      case '/movie':
        res.end('我是post 接口的-movie---1')
        break;
      case '/login':
        res.end('我是post 接口 login---1')
        break;
    }
  }



  res.end()

  //  res.end(JSON.stringify("five"))


})

server.listen(PORT, () => {
  console.log(`当前服务器端口:${PORT}`)
})