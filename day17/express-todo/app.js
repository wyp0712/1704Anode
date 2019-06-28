const express = require('express')
const bodyParser = require('body-parser') // post参数
const path = require('path')
const fs = require('fs')
const createError = require('http-errors')
const ejs = require('ejs') // 模版引擎
const { readfile } = require('./utils/util')
const movieJson = require('./mock/movie.json')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(bodyParser.json()) // 解析json
// k1=v1&kw=v2
// var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(bodyParser.urlencoded({ extended: false }))
// 第一个参数 文件夹指向  第二个参数  用什么读静态文件

app.use('/public', express.static(path.join(__dirname, '/public')))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'html')
app.engine('html', ejs.renderFile)
// app.get('/', (req, res, next) => {
//   res.render('index.html') // render找views下的文件名字
// })
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
  // res.sendFile(path.join(__dirname, 'views', 'home.html'))
  res.render('home', {
    title: "我是登陆的首页",
    msg: ["登陆", "注册", "详情页面"]
  })
})

// 登陆注册页面
app.get('/loginRegister', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'views', 'login-register.html'))
})

// 
app.get('/todo', (req, res, next) => {
  // res.sendFile(path.join(__dirname, 'views', 'todo.html'))
  res.render('todo', {
    movieArr: movieJson.movieList,
    title: '猫眼电影'
  })
})

app.get('/exam', (req, res, next) => {
  let { data } = req.query;
  console.log(data, 'data')
  let flag = fs.appendFileSync(path.join(__dirname, 'mock/exam.txt'), data)
   if (!flag) {
     res.send({
       code:0,
       msg: 'success'
     })
   } else {
    res.send({
      code:-1,
      msg: 'success'
    })
   }
})

// 过滤数据接口
app.get('/filterMovie', (req, res, next) => {
   let { keymovie } = req.query;
   readfile('./mock/movie.json').then(resMovie => {
      let list = JSON.parse(resMovie)
      let movieArr = list.movieList.filter(item => {
        return item.nm.includes(keymovie)
      })
      res.send({
        data: movieArr,
        code: 0
      })
   })
})

// 删除接口
app.get('/removeMovie', (req, res, next) => {
  let { id } = req.query;
  console.log(id,'id')

  readfile('./mock/movie.json').then(resMovie => {
     let list = JSON.parse(resMovie)

     let movieArr = list.movieList.filter(item => {
       return id != item.id
     })
     let obj = {
      movieList:movieArr
     }
     let removeStatus = fs.writeFileSync('./mock/movie.json', JSON.stringify(obj))
     if (!removeStatus) {
      res.send({
        data: movieArr,
        code: 0
      })
     } else {
      res.send({
        data: '删除失败',
        code: -1
      })
     }
  })
})

// 更新接口
app.get('/updateMovie', (req, res, next) => {
  let { id, name } = req.query;
   console.log(id, name, '------------1')
  readfile('./mock/movie.json').then(resMovie => {
    let list = JSON.parse(resMovie)

    list.movieList.map(item => {
      if (item.id == id) {
        item.nm = name
      }
    })

    let obj = {
     movieList: list.movieList
    }
    let removeStatus = fs.writeFileSync('./mock/movie.json', JSON.stringify(obj))
    if (!removeStatus) {
     res.send({
       data: list.movieList,
       code: 0
     })
    } else {
     res.send({
       data: '删除失败',
       code: -1
     })
    }
 })
})


app.post('/login', (req, res, next) => {
  //   req.body
  let { user, pwd } = req.body
  readfile('./mock/user.json').then(list => {
    let loginlist = JSON.parse(list)
    let flag = loginlist.some(item => {
      return item.user === user && item.pwd === pwd
    })
    console.log(flag, 'flag')
    if (flag) {
      res.send({
        code: 0,
        msg: 'success'
      })
    } else {
      res.send({
        code: -1,
        msg: '请输入正确的账号或者密码'
      })
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
      res.send({
        code: -1,
        msg: '用户名已经存在，请重新注册'
      })
    } else {
      registerList.push({
        user: user,
        pwd: pwd
      })
      let writeStatus = fs.writeFileSync('./mock/user.json', JSON.stringify(registerList))
      if (!writeStatus) {
        res.send({
          code: 0,
          msg: '注册成功，请登录'
        })
      }
    }
  })
})

app.use(function(req, res, next) {
  next(createError(404))
})

app.listen(3000, () => {
  console.log(3000)
})