const http = require('http')
const path = require('path')
const url = require('url')
const querystring = require('querystring');
const fs = require('fs');
var mime = {
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
};

http.createServer((req, res) => {

  let urlPath = req.url;
  let method = req.method;
  let pathname = url.parse(urlPath).pathname;
  pathname = pathname == '/' ? './static/index.html' : pathname;
  let extname = path.extname(pathname);

  if (extname) { // 
    if (extname === '.ico') {
      res.end('123')
      return;
    }

    //未知的类型一律用"text/plain"类型

    let content = fs.readFileSync(path.join(__dirname, pathname))
    var contentType = mime[extname] || "text/plain";
    res.writeHead(200, { "content-type": contentType });
    res.end(content)
  } else {
    if (method === 'GET') {
      switch (pathname) {
        case '/login':
          res.end('login-get')
          break;
      }
    } else if (method === 'POST') {
      switch (pathname) {
        case '/login':
          res.end('login-post')
          break;
      }
    }
  }

  res.writeHead(404, { 'Content-type': 'text/html;charset=utf-8' })
  res.end('<h1>404</h1>')



}).listen(9000, () => {
  console.log(9000)
})

//读取文件的函数
function readFile(filePath, contentType, res) {
  res.writeHead(200, { "content-type": contentType });
  //建立流对象，读文件
  var stream = fs.createReadStream(filePath);
  //错误处理
  stream.on('error', function () {
    res.writeHead(500, { "content-type": contentType });
    res.end("<h1>500 Server Error</h1>");
  });
  //读取文件
  stream.pipe(res);
}