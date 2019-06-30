const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const { readfile } = require('../utils/index')

const router = express.Router()
// 渲染页面 路由分发
router.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname,'../', 'views', 'index.html'))
})
router.get('/search', (req, res, next) => {
  let { key } = req.query;
  readfile('./mock/movie.json').then(reSearch => {
    // 根据条件返回数组
    let searchList = reSearch.movieList.filter((item, index) => {
      return item.nm.includes(key)
    })
    if (searchList) {
      res.send({
        code: 0,
        list: searchList
      })
    }
  })
})

module.exports = router