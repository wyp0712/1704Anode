const http = require('http')
const fs = require('fs')
const path = require('path')
const url = require('url')
const querystring = require('querystring')
const port = 7000

http.createServer(processRequest).listen(port, () => { console.log(port) })

function processRequest(req, res) {
  //mime类型
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

  var reqUrl = req.url; // 
  var pathName = url.parse(reqUrl).pathname; // 
  pathName = pathName === '/' ? '/index.html' : pathName // 
  var ext = path.extname(pathName).slice(1); // 

  var filePath = path.resolve(__dirname + pathName);

  console.log(filePath, 'filePath')

  var contentType = mime[ext] || "text/plain";
  if (ext) {
    //未知的类型一律用"text/plain"类型
    if (ext === 'ico') {
      res.end()
      return;
    }
    readFile(filePath, contentType);
  } else {
    switch (pathName) {
      case '/login':
        res.end('111')
        break;
    }
  }

  //读取文件的函数
  function readFile(filePath, contentType) {
    res.writeHead(200, { "content-type": contentType });
    //建立流对象，读文件
    var stream = fs.createReadStream(filePath);
    //错误处理
    stream.on('error', function () {
      // res.writeHead(500, { "content-type": contentType });
      res.end("<h1>500 Server Error</h1>");
    });
    //读取文件
    stream.pipe(res);
  }
}