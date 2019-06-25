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



