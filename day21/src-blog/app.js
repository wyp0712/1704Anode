const express = require('express')
const url = require('url')
const path = require('path')
const creatErrors = require('http-errors')
const bodyParser = require('body-parser')

// 引入路由文件
const loginRouter = require('./router/login')
const blogRouter = require('./router/blog')

const app = express();
// 加载静态资源
app.use('/public', express.static(path.join(__dirname, 'public')))
// 解析post参数
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


// 注册路由
app.use('/', loginRouter)
app.use('/', blogRouter)



// 错误处理
app.use((req, res, next) => {
  next(creatErrors(404))
})
// 渲染404页面
app.use((err, req, res, next) => {
  // console.log(err.message)
  res.sendFile(path.join(__dirname, './views/error.html'))
})

app.listen(8080, () => {
  console.log(8080)
})