// koa

const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const { readfile } = require('./utils/index')
const indexRouter = require('./router/index')

const app = express()


// 加载静态文件
app.use('/public', express.static(path.join(__dirname, 'public')))

// bodyparser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.use('/',indexRouter)


app.listen(3000, () => {
  console.log(3000)
})




