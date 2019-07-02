const express = require('express')
const path = require('path')
const { readfile } = require('../utils/index')
const fs = require('fs')

const router = express.Router()

// 路由分发， 渲染页面
// list
router.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../views/list.html'))
})
//正文
router.get('/content', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../views/content.html'))
})
// 新建
router.get('/addnew', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../views/newblog.html'))
})


// 接口区域

// 新建博客
router.post('/newBlog', (req, res, next) => {
  let  {title, content, author } = req.body;
  let time = new Date() * 1
  readfile(path.join(__dirname, '../mock/blog.json')).then(blog => {
      // 如果数据库中没有数据，就存储数据，写入json文件
      blog.push({
        id: new Date() * 1,
        title: title,
        content: content,
        author: author,
        time: new Date().toLocaleString()
      })
      fs.writeFileSync(path.join(__dirname, '../mock/blog.json'), JSON.stringify(blog))
      res.send({
        code: 0,
        msg: 'success'
      })
  })
})

// 微博列表接口
router.get('/listblog', (req, res, next) => {
  let levelData = []
  readfile(path.join(__dirname, '../mock/blog.json')).then(list => {
    list.forEach(item => {
      levelData.push({
        title: item.title,
        id: item.id,
        time: item.time
      })
    })
    res.send({
      code: 0,
      list: levelData
    })
  })
})

// 获取微博正文内容
router.get('/getContent', (req, res, next) => {
  let { id } = req.query;
  readfile(path.join(__dirname, '../mock/blog.json')).then(list => {
    let contentList = list.filter(item => {
      return item.id == id
    })
    res.send({
      code: 0,
      list: contentList
    })
  })
})


module.exports = router 