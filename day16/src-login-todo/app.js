const express = require('express')
const bodyParser = require('body-parser') // post参数
const path = require('path')
const app = express()




/**
 * 
 * 1. 登陆验证
 * 2. 注册
 * 
 * 
 */

 // 读取静态文件
 app.get('/', (req, res, next) => {
   res.sendFile(path.join(__dirname))
 })

 app.post('/login', (req, res, next) => {
       
 })

 app.post('/register', (req, res, next) => {

 })






app.listen(3000, () => {
  console.log(3000)
})