const express = require('express')
const bodyParse = require('body-parser')
const { readfile } = require('./utils/util')
const path = require('path')


const app = express()



app.get('/movie', (req, res, next) => {
  readfile('./mock/movie.json').then(movelist => {
    if (movelist) {
      res.send(movelist)
    } else {
      res.send('没找到')
    }
  })
})


app.listen(9999, () => {
  console.log(9999)
})
