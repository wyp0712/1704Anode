const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url)
  console.log(req.method)
  if(req.url === '/favicon.ico') {
    console.log('hello world')
  }

  // 发送 HTTP 头部 
  // HTTP 状态值: 200 : OK
  // 内容类型: text/plain
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');// 发送响应数据 "Hello World"
});
server.listen(8000);