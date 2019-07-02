const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const { readfile } = require('../utils/index')
const fs = require('fs')
const router = express.Router()

// 路由分发， 渲染页面
router.get('/index', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../views/index.html'))
})


// 存储数据接口
router.post('/creatStore', (req, res, next) => {
  let  { id, name, levelOne, levelTwo } = req.body;
  readfile(path.join(__dirname, '../mock/store.json')).then(store => {
    // console.log(store, 'store')
    let flag = store.some(item => {
      return item.id === id
    })
    if(flag) {
      res.send({
        code: -1,
        msg: '该身份证已经被注册了，换一个吧'
      })
    } else {
      // 如果数据库中没有数据，就存储数据，写入json文件
      store.push({
        id: id,
        name: name,
        levelOne: levelOne,
        levelTwo: levelTwo
      })
      fs.writeFileSync(path.join(__dirname, '../mock/store.json'), JSON.stringify(store))

      res.send({
        code: 0,
        msg: 'success'
      })
    }
  })
})

// 一级分类接口
router.get('/levelOne', (req, res, next) => {
  let levelData = []
  readfile(path.join(__dirname, '../mock/data.json')).then(list => {
    list.forEach(item => {
      levelData.push(item.name)
    })
    res.send({
      code: 0,
      list: levelData
    })
  })
})

// 二级分类接口
router.get('/levelTwo', (req, res, next) => {
  let  { levelName } = req.query;
  readfile(path.join(__dirname, '../mock/data.json')).then(list => {
    let data = list.filter(item => {
      return item.name === levelName
    })
    console.log(data, 'data')
    res.send({
      code: 0,
      data: data
    })
  })
})


module.exports = router 