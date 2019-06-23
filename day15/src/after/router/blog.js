
const fs = require('fs')
const path = require('path')
const url = require('url')

const { readfile } = require('../utils/index')
const { SuccessModel, FailModel } = require('../model/index')

const handleBlogRouter = (req, res) => {

  let method = req.method;
  let address = url.parse(req.url).pathname

  if (method === 'GET' && address === '/login') {
    // 先获取参数
    let { } = req.query;
    let filepath = path.join()

  }
  if (method === 'POST' && address === '/list') {
    // 先获取参数
    let { } = req.body;
    let filepath = path.join()

    return readfile(path).then(() => {

      return new SuccessModel()
    })
  }

}


module.exports = handleBlogRouter