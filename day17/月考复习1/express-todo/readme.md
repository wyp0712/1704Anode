#登陆接口
some

#注册
push并且写入

#删除
根据id删除
filter  id!=item.id

#更新
根据id更新内容  id 内容

遍历数据，根据id找到数据，替换内容

#模糊搜索接口
filter includes









1. express

 npm install express --save

 const express = require('express')
 const borderparser = require("body-parser")


 # ejs 
    cnpm install ejs --save
    const ejs = require('ejs')
    app.set('views', path.join(__dirname, 'views'))
    app.set('view engine', html)
    app.engine('html', ejs.renderFile)


 1. 设置静态文件处理中间件 
     app.use( '/public', express.static(path.join(__dirname, 'public')) )

 2. 设置bodyparser  
     app.use( bodyparser.json() )
     app.use( bodyparser.urlencoded( { extended: false }) )

 3. 渲染静态页面 
    app.get('/',() => {
      res.sendFile()
    })    

   如果用ejs
   app.get('/', () => {
     res.render('文件名', {

     })
   })
  
  4. 接口 get post 
    接收参数
     req.query
     req.body

    app.get('/home', () => {

    })

  5. 错误处理参数 放置位置在所有的路由下面
   const createError = require('http-errors')

   app.use(（req,res,next）=> {
      next(createError(404))
   })
   

















1. 加载静态资源  注意路径

// 第一个参数 路由指向，可以任意更改  第二个参数  用什么读静态文件
app.use('/public', express.static(path.join(__dirname, '/public')))

2. post  

app.use(bodyParser.json()) // json
var urlencodedParser = bodyParser.urlencoded({ extended: false })




1. gulp

2. express


1. 第一 ，加载页面，凡是在views下的html,必须有路由对应

  app.get('/loginRegister', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', 'login-register.html'))
  })

2. get post

  登陆接口 ： 需要判断账号密码匹配与否 如果匹配就返回成功信息 如果不匹配就返回失败信息


  注册接口，同上  只判断账号名字有没有 有的话返回 提示 已经注册  否则 

3.   



3. ejs 

cnpm install ejs --save
const ejs = require('ejs')
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', html)
app.engine('html', ejs.renderFile)




app.get('/', (req, res, next) => {
  
   <!-- res.sendFile(path.join()) -->

   res.render('home', {
     title:'index页面'
   })

})






