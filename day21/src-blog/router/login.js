const express = require('express')
const path = require('path')
const { readfile } = require('../utils/index')
const fs = require('fs')
const router = express.Router()


// 渲染登陆页面
router.get('/login', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../views/login.html'))
})

router.post('/login', (req, res, next) => {
  let { user, pwd } = req.body;
  readfile(path.join(__dirname, '../mock/data.json')).then(userData => {
    let flag = userData.some(item => {
      return item.user === user && item.pwd === pwd
    })
    if (flag) {
      res.send({
        code: 0,
        msg: 'success'
      })
    } else {
      res.send({
        code: -1,
        msg: 'fail'
      })
    }

  })


})





module.exports = router