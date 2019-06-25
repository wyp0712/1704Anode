const express = require('express')
const bodyParser = require('body-parser') // post参数
const path = require('path')
const fs = require('fs')

const { readfile } = require('./utils/util')

const app = express()
app.use(bodyParser.json()) // json
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// 第一个参数 文件夹指向  第二个参数  用什么读静态文件
app.use('/public', express.static(path.join(__dirname, '/public')))



/**
 * 
 * 1. 登陆验证
 * 2. 注册
 * 
 *  获取参数：
 * 
 *   get  req.query
 *   post  req.body
 * 
 */

// 渲染页面
app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'views', 'home.html'))
})

// 登陆注册页面
app.get('/loginRegister', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'views', 'login-register.html'))
})

// 
app.get('/todo', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'views', 'todo.html'))
})

app.post('/login', (req, res, next) => {
  //   req.body
  let { user, pwd } = req.body
  readfile('./mock/user.json').then(list => {
    let loginlist = JSON.parse(list)
    let flag = loginlist.some(item => {
      return item.user === user && item.pwd === pwd
    })
    if (flag) {
      res.send('登陆成功')
    } else {
      res.send('请重新登陆')
    }
  })
})

app.post('/register', (req, res, next) => {
  let { user, pwd } = req.body
  readfile('./mock/user.json').then(list => {
    let registerList = JSON.parse(list)
    let flag = registerList.some(item => {
      return item.user === user
    })
    if (flag) {
      res.send('用户名已经存在，请重新注册')
    } else {
      registerList.push({
        user: user,
        pwd: pwd
      })
      let writeStatus = fs.writeFileSync('./mock/user.json', JSON.stringify(registerList))
      if (!writeStatus) {
        res.send('注册成功，请登录')
      }
    }
  })
})


app.listen(3000, () => {
  console.log(3000)
})