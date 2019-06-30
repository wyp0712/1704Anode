const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const ejs = require('ejs')
const creatErrors = require('http-errors')

const indexRouter = require('./router/index')

const app = express()


// 静态资源
app.use('/public', express.static(path.join(__dirname, 'public')))

// post参数
 app.use(bodyParser.json())
 app.use(bodyParser.urlencoded({ extended:false }))

// ejs
app.set('views', path.join(__dirname, 'views')) // 设置访问路径
app.set('view engine', 'html') // 设置 以html结尾的 读取页面
app.engine('html', ejs.renderFile)

// 渲染html  路由分发 接口


app.use('/', indexRouter)


app.use(function(req, res, next) {
  next(creatErrors(404))
})




app.listen(3000, () => {
  console.log(3000)
})