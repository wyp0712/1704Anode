const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');
const querystring = require('querystring');
const PORT = 3000;


const MIME = {
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

const server = http.createServer((req, res) => {

  let urlpath = req.url; //: / ; /favicon.ico ;
  let pathname = url.parse(urlpath).pathname;
  pathname = pathname === '/' ? 'index.html' : pathname;
  let extname = path.extname(pathname).slice(1)
  console.log(extname, 'extname')

  res.writeHead(200, { 'Content-type': `text/html;chartset=utf-8` })
  let content = fs.readFileSync(path.join(__dirname, pathname))
  res.end(content)
  if (req.method === 'POST' && req.url === '/login') {
    console.log('hello world')
    res.end()
  }




})

server.listen(PORT, () => {
  console.log('端口为' + PORT)
})