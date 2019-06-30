const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const { readfile } = require('../utils/index')
const router = express.Router()

// 路由分发， 渲染页面
router.get('/index', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../views/index.html'))
})

// 接口
router.post('/createStore', (req, res, next) => {

})

module.exports = router 