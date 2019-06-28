const express = require('express')
const path = require('path')
const { readfile } = require('../utils/index')

const router = express.Router()


// 路由分发  router.get()
router.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname,'../', 'views', 'index.html'))
})
// 接口
router.get('/getProduct', (req, res, next) => {
  res.header({'Access-Control-Allow-Origin':'*'}) // 
  // 获取get参数
  let  { page, size  } = req.query
  page = page * 1
  size = size * 1
  readfile('./mock/movie.json').then(movieList => {

    let list = JSON.parse(movieList)
    /**
     *  0  5  page * size = 0 =< index  <  (page + 1) * size = 5
     *  1  5  page * size = 5 
     *  2  5  page * size = 10
     * 
     *  */ 
    let pageData = list.movieList.filter((item, index) => index >= page * size && index < (page+1) * size )
    res.send({
      code: 0,
      list: pageData
    })
  }) 
})

router.get('/list', (req,res) => {
  res.send({
    code:0,
    data: [
      {
        name: '上海'
      }
    ]
  })
})

module.exports = router