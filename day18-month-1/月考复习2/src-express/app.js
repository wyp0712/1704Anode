
const express = require('express')
const bodyParser = require('body-parser')
const creatErrors = require('http-errors')
const path = require('path')
const ejs = require('ejs')
const url = require('url')

const cors = require('cors')

// 引入路由
const indexRouter = require('./router/index')
const userRouter = require('./router/user')

const app = express()
const PORT = 3000

// 加载静态文件
app.use('/public', express.static(path.join(__dirname, 'public')))

app.use(cors())

// 加载处理post参数中间件
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// 加载ejs 模版引擎渲染   
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'html')
app.engine('html', ejs.renderFile)

// 路由
app.use('/', indexRouter)
app.use('/user', userRouter)


// 错误处理中间件
app.use(function(req, res, next) {
  next(creatErrors(404))
})


app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})

