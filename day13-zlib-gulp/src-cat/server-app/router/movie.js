
const url = require('url');
const querystring = require('querystring');
const fs = require('fs');
const { SuccessModel, FailModel } = require('../model/resModel')

const handerMovieRouter = (req, res) => {

  const method = req.method;
  const urlPath = req.url;
  const address = url.parse(urlPath).pathname
  const getParams = querystring.parse(urlPath.split('?')[1])


    // 
    if (method === 'GET' && address === '/movie') {
      // 获取前端参数
      let { page, size } = getParams;
      return readefileSmall('./page.json').then(list => {
        let filtData = list.movieList.filter((n, index) => index >= page * 1 * size * 1 && index < (page * 1 + 1) * size * 1);
        return new SuccessModel(filtData)
      })
    }

    if (method === 'POST' && address === '/page') {

    }
}

// 读取文件
function readefileSmall(src) {
  return new Promise((resolve, reject) => {
    fs.readFile(src, function (err, fileData) {
      if (err) {
        reject(err)
        return
      }
      resolve(JSON.parse(fileData))
    })
  })
}

module.exports = handerMovieRouter