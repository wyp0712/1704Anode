const http = require('http')
const fs = require('fs')
const path = require('path')
const url = require('url')
const querystring = require('querystring');

const handleBlogRouter = require('./router/blog')


http.createServer(processRequest).listen(9999, () => { console.log(9999) })


const MIME = {
  'html': 'text/html',
  'css': 'text/css',
  'js': 'text/javascript'
}

function processRequest(req, res) {
  // 
  let urlPath = req.url; // 完整url
  let pathname = url.parse(urlPath).pathname; // 地址 
  let extname = path.extname(pathname).slice(1) // 后缀名

  // localhsot:5000/
  pathname = pathname === '/' ? '/index.html' : pathname

  let filepath = path.join(__dirname, '../', 'before', pathname)
  let contentType = MIME[extname] || 'text/plain'
  
  // 获取get参数
  req.query = querystring.parse(urlPath.split('?')[1])

  // 判断是静态资源还是接口
  if (extname) {

    filestream(filepath, contentType)
  } else {
    //  
    res.writeHead(200, { 'Content-Type': 'application/json' })
    getPostData(req).then(postData => {
      // name=123&age=12
      req.body = querystring.parse(postData)

      handleBlogRouter.then(resData => {

        res.end(JSON.stringify(resData))
      })

    })
  }


  function filestream(filepath, contentType) {
    res.writeHead(200, { 'Content-Type': contentType })
    let stream = fs.createReadStream(filepath)
    stream.pipe(res)
  }
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