1. gulp搭建服务 
  gulp-sass
  gulp-clean-css
  gulp-html-min
  gulp-uglify
  gulp-rename
  gulp-webserver
  gulp-concat
  gulp-babel

2. 起接口 
   /list
   /login
   /register

1. express 
   处理静态文件
   const app = express()
   app.use('/public', express.static(path.join(__dirname, '/public')))
  var urlencodedParser = bodyParser.urlencoded({ extended: false }) //extended为false表示使用querystring来解析数据，这是URL-encoded解析器
  app.use(bodyParser.json())//添加json解析器

 
   /login
   /register
   /list
