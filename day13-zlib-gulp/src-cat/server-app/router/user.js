

const url = require('url');
const fs = require('fs');
const path = require('path');
const { SuccessModel, FailModel } = require('../model/resModel')

const handleUserRouter = (req, res) => {

  const method = req.method;
  const urlPath = req.url;
  const address = url.parse(urlPath).pathname
  // res.writeHead(200, { 'Content-type': 'application/json' })
  // const 
  const postData = req.body;
  // return new Promise((resolve, reject) => {

    if (method === 'POST' && address === '/login') {
      let { user, pwd } = JSON.parse(postData) // 前端传输过来的是字符串
      readefileSmall(path.join(__dirname, '../', '/user.json')).then(userData => {
        if (userData) {
          let loginStatus = userData.some((item) => {
            return item.user == user && item.pwd == pwd
          })
          if (loginStatus) {
            // 给前端必须转成字符串
            // resolve(new SuccessModel('success'))
            return new SuccessModel('success')
          } else {
            // resolve(new FailModel('fail'))
            return new SuccessModel('fail')
          }
        }
        return;
      })
    }

    if (method === 'POST' && address === '/register') {
      let registerList = JSON.parse(postData)
      readefileSmall(path.join(__dirname, '../', '/user.json')).then(userData => {
        userData.push(registerList)
        fs.writeFile(path.join(__dirname, '../', '/user.json'), JSON.stringify(userData), function (err, data) {
          resolve(new SuccessModel('注册成功'))
        })
      })
    }

  // })
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

module.exports = handleUserRouter
