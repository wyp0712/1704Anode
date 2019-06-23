const fs = require('fs');;
const path = require('path')
const url = require('url');
const querystring = require('querystring')

const { SuccessModel, FailModel } = require('../model/resModel')

const { readfileFn } = require('../util/util')

const handleAdminRouter = (req, res) => {

  // 请求方式
  const method = req.method;
  // 请求地址 eg: /movie
  const address = url.parse(req.url).pathname;
  // 通过请求体拿到的post参数
  const postData = req.body;

  // 读取文件数据库路径
  const fileJson = path.join(__dirname, '../', 'Mock', 'user.json')

  if (method === 'GET' && address === '/admin') {
    let { page, size } = req.query;
    return readfileFn(fileJson).then(adminList => {
      let list = JSON.parse(adminList)
      let pageList = list.filter((n, index) => index >= page * 1 * size && index < (page * 1 + 1) * size)
      return new SuccessModel(pageList);
    })
    // return  Promise.resolve(new SuccessModel("注册成功，请登录"))
  }

  // 删除下去
  if (method === 'POST' && address === '/del') {
    let { id } = postData;
    return readfileFn(fileJson).then(delData => {
      let dellist = JSON.parse(delData)
      let data = dellist.filter((n, index) => n.id != id)
      let flag = fs.writeFileSync(fileJson, JSON.stringify(data))

      console.log(flag, 'data')
      if (!flag) {
        return new SuccessModel(data, '删除成功');
      }
    })
  }

  // 
  if (method === 'POST' && address === '/update') {
    // 接收要改数据的id
    // 接收要更改的内容
    let { id, content } = postData;
    return readfileFn(fileJson).then(updateList => {
      let updateData = JSON.parse(updateList)
      updateData.map((item, index) => {
        if (item.id === id) {
          item.user = content
        }
      })
      // console.log(updateData, 'updateData')
      let flag = fs.writeFileSync(fileJson, JSON.stringify(updateData))
      // console.log(flag, 'flag')
      if (!flag) {
        return new SuccessModel(updateData)
      }
    })
  }

  if (method === 'GET' && address === '/big') {
    // 大类
    let file = path.join(__dirname, '../', 'Mock', 'data.json')
    console.log(file, 'file')
    return readfileFn(file).then(data => {
      return JSON.parse(data)
    })
  }

  if (method === 'GET' && address === '/small') {
    let { filename } = req.query;
    let file = path.join(__dirname, '../', 'Mock', filename)
    return readfileFn(file).then(list => {
      return JSON.parse(list)
    })
  }

  // 省市三级联动接口地址
  if (method === 'GET' && address === '/address') {
    // 参数
    let { province, city, county } = req.query;
    const fileJson = path.join(__dirname, '../', 'Mock', 'city.json');
    return readfileFn(fileJson).then(cityData => {

      let cityDataArr = JSON.parse(cityData)
      let citylist;

      // 只有省的情况
      if (province) {
        citylist = cityDataArr.filter((n, index) => {
          return n.name === province
        })
      }

      // 存在省 且存在 市
      if (province && city) {
        cityDataArr.filter((n, index) => {
          if (n.name === province) {
            let a = n.city.filter((item, ind) => {
              return item.name === city
            })
            citylist = a;
          }
        })
      }
      
      return citylist || new FailModel('参数有误')

    })

  }
}

module.exports = handleAdminRouter
