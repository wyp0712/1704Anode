const express = require('express')
const path = require('path')
const ejs = require('ejs')
/**
 * 1. 静态文件
 * 2. 接口
 * 
 */

const app = express()

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'html');

app.engine('html', ejs.renderFile);

app.get('/index.html', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'src', '/index.html'))
})

app.get('/', (req, res, next) => {
  res.render('demo', {
    data: ['item1', 'item2', 'item4'],
    msg: 'hello world'
  })
})


// jiekou 

app.listen(4000, () => {
  console.log(4000)
})
