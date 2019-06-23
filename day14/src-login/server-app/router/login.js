
const fs = require('fs');;
const path = require('path')
const url = require('url');
const querystring = require('querystring')
const { SuccessModel, FailModel } = require('../model/resModel')

const handleLoginRouter = (req, res) => {

  // 请求方式
  const method = req.method;
  // 请求地址 eg: /movie
  const address = url.parse(req.url).pathname;
  // 通过请求体拿到的post参数
  const postData = req.body;

  // 读取文件数据库路径
  const fileJson = path.join(__dirname, '../', 'Mock', 'user.json')

  // 登陆接口  如果存在就登陆
  if (method === 'POST' && address === '/login') {
    // 对post参数解构赋值
    const { user, pwd } = postData;
    // 将promise的函数return出去，
    return readfileFn(fileJson).then(loginData => {
      const list = JSON.parse(loginData);
      let loginStatus = list.some((item) => {
        return item.user === user && item.pwd === pwd
      })
      if (loginStatus) {
        return new SuccessModel('登陆成功')
      } else {
        return new FailModel('登陆失败')
      }
    })
  }

  // 注册接口  先读取数据，如果存在就让换一个数据注册
  if (method === 'POST' && address === '/register') {
    // 对post参数解构赋值
    
    const { user, pwd } = postData;
    return readfileFn(fileJson).then(readData => {
      let userData = JSON.parse(readData)
      let flag = userData.some(item => {
        return item.user === user
      })
      if (!flag) { // 数据库不存在
        userData.push(postData) // postData == 'user=123&pwd=321'
        fs.writeFileSync(fileJson, JSON.stringify(userData))
        return new SuccessModel("注册成功，请登录")
      } else {
        return new FailModel("当前信息已经被占用")
      }
    })
  }

}

// 
function readfileFn(src) {
  return new Promise((resolve, reject) => {
    fs.readFile(src, (err, data) => {
      if (err) {
        reject(err)
        return;
      }
      resolve(data.toString())
    })
  })
}

module.exports = handleLoginRouter