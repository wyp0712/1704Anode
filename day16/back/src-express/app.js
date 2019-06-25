const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs');

const app = express()

//添加的新用户数据
const user = {
  "user4": {
    "name": "mohit",
    "password": "password4",
    "profession": "teacher",
    "id": 4
  }
}

// 返回的对象是一个键值对，当extended为false的时候，键值对中的值就为'String'或'Array'形式，为true的时候，则可为任何数据类型。
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })
//extended为false表示使用querystring来解析数据，这是URL-encoded解析器

app.use(bodyParser.json())//添加json解析器

// 静态文件
app.use('/public', express.static('public'));

// 读静态文件
app.get('/index.html', function (req, res) {
  res.sendFile(__dirname + '/views' + "/index.html");
})

app.get('/', (req, res) => {
  console.log(req.query, 'req.query')
  res.send('hello world')
})

app.get('/listUsers', (req, res, next) => {
  fs.readFile(__dirname + "/Mock" + "/user.json", 'utf8', function (err, data) {
    console.log(data);
    res.send(data);
  });
})

app.get('/addUser', (req, res, next) => {
  // 读取已存在的数据
  fs.readFile(__dirname + "/Mock" + "/user.json", 'utf8', function (err, data) {
    data = JSON.parse(data);
    data["user4"] = user["user4"];
    // console.log( data );
    res.send(JSON.stringify(data));
  });
})

app.get('/:id', function (req, res, next) {
  // 首先我们读取已存在的用户
  fs.readFile(__dirname + "/Mock" + "/user.json", 'utf8', function (err, data) {
    data = JSON.parse(data);
    // console.log(req.params)
    var user = data["user" + req.params.id]
    // console.log( user );
    res.end(JSON.stringify(user));
  });
  next()
})

app.get('/deleteUser', function (req, res) {

  // First read existing users.
  fs.readFile(__dirname + "/Mock" + "/user.json", 'utf8', function (err, data) {
    data = JSON.parse(data);
    // console.log(data,)
    // delete data["user" + 3];

    console.log(data, '===========================');
    // res.end( data);
    res.send(JSON.stringify(data))
  });
})


app.post('/post', urlencodedParser, (req, res, next) => {
  res.send("post")
})


app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
