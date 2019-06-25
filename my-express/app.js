const express = require('express')
const path = require('path')
const bodyParser = require('body-parser') // 解析post参数
// req.query  get  req.body  post
const { readfile } = require('./utils/util')
const { SuccessModel, FailModel } = require('./model/resModel')
// 实例化
const app = express()
// 返回的对象是一个键值对，当extended为false的时候，键值对中的值就为'String'或'Array'形式，为true的时候，则可为任何数据类型。
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false }) //extended为false表示使用querystring来解析数据，这是URL-encoded解析器
app.use(bodyParser.json())//添加json解析器
// 加载静态文件
app.use('/public', express.static(path.join(__dirname, '/public')))

app.get('/index.html', (req, res, next) => {
  res.sendFile(path.join(__dirname, '/views/index.html'))
})

// 接口
app.get('/', (req, res, next) => {
  // get参数
  readfile('./mock/movie.json').then(list => {
    // console.log(new SuccessModel(JSON.parse(list)), 'list--------1')
    res.send(list)
  })
})

app.post('/postData', (req, res, next) => {
  console.log(req.body, 'post-参数')
  res.send(obj)
})

app.listen(3000, () => {
  console.log(3000)
})