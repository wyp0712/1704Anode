const http = require('http')
const url = require('url')
const path = require('path')
const fs = require('fs')
const querystring = require('querystring')

const PORT = 5000

const handerIndexRouter = require('./router/index')


http.createServer(processRequest).listen(PORT, () => { console.log(PORT) })
function processRequest(req, res) {

  res.setHeader('Content-type', 'application/json');


  const urlPath = req.url;
  const pathname = url.parse(urlPath).pathname;
  req.query = querystring.parse(urlPath.split('?')[1])
  console.log(req.query, 'req')

  getPostData(req).then(postData => {
    req.body = postData;
    let indexData = handerIndexRouter(req)
    if (indexData) {
      console.log(indexData, 'indexData')
      return indexData.then(resData => {
        if (resData) {
          res.end('JSON.stringify(resData)')
        }
        return;
      })
    }

  })
}

function getPostData(req) {
  return new Promise((resolve, reject) => {
    let postData = ''
    req.on('data', (chunk) => {
      postData += chunk.toString()
    })
    req.on('end', () => {
      resolve(
        JSON.parse(postData)
      )
    })
  })
}