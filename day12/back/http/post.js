const http = require('http');
const querstring = require('querystring');
const fs = require('fs');
const path = require('path');
const url = require('url');

const getPostData = (req, res) => {
  return new Promise((resolve, reject) => {
    const method = req.method;
    // if (method != 'POST') {
    //   resolve({})
    //   return
    // }
    if (req.headers['content-type'] != 'application/json') {
      resolve({})
      return
    }
    let postData = '';
    req.on('data', (chunk) => {
      postData += chunk.toString()
    })
    req.on('end', () => {
      if (!postData) {
        resolve({})
        return
      }
      resolve(
        JSON.parse(postData)
      )
    })

  })
}

http.createServer((req, res) => {
   
  if (req.url === '/login') {
    let con = fs.readFileSync('./index.html')
    res.end(con)
  }
  // let urlP = url.parse(req.url);
  // let pathname = urlP.pathname;
  // console.log(pathname, '--------url---1')
  // pathname = pathname === '/' ? 'index.html' : pathname;
  // let extname = path.extname(pathname).slice(1)
  // console.log(extname, 'extname')
  // if (extname) {
  //   if (extname === 'ico') {
  //     res.end('111')
  //     return;
  //   }
  //   let content = fs.readFileSync(path.join(__dirname, pathname))
  //   res.end(content)
  // } else {
  // }
  // res.end()
  // if (req.method === 'POST' && path === '/login') {
  //   getPostData(req, res).then(postData => {
  //     req.body = postData
  //     console.log(req.body, 'res')
  //     res.end(JSON.stringify(req.body))
  //   })
  // }

}).listen(9999, () => {
  console.log(9999)
})