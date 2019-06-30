const express = require('express')
const router = express.Router()
const path = require('path')

// 路由  控制页面跳转的就叫路由
router.get('/', (req,res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views/index.html'))
})

router.get('/list', (req,res, next) => {

  console.log(req.query)
  
  res.send({
    code: 0,
    msg: 'success'
  })
})

module.exports = router

