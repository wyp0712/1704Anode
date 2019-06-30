const express = require('express')
const url = require('url')
const path = require('path')
const creatErrors = require('http-errors')
const bodyParser = require('body-parser')

const app = express();


// 加载静态资源
app.use('/public', express.static(path.join(__dirname, 'public')))

// 解析post参数
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))





app.post('/creatStroe', () => {
  let  {} = req.body;
})


app.get((req, res, next) => {
  next(creatErrors(404))
})

app.listen(3000, () => {
  console.log(3000)
})