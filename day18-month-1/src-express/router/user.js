const express = require('express')
const path = require('path')
const { readfile } = require('../utils/index')
const router = express.Router()

router.get('/login', (req, res, next) => {
  res.send({
    "city": " jjjjjjjj"
  })
})

module.exports = router