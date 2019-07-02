const express = require('express')
const path = require('path')
const { readfile } = require('../utils/index')
const fs = require('fs')
const router = express.Router()



router.get('/findpwd', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../views/findpwd.html'))
})

router.get('/findpwd', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../views/home.html'))
})





module.exports = router