const express = require('express');
const fs = require('fs');
const { readfile } = require('./utils/util')

const app = express();

app.get('/', (req, res, next) => {
  readfile('./mock/movie.json').then(readData => {
    console.log(typeof readData, 'readData')
    res.send(readData)
  })
})

app.listen(9000, () => {
  console.log(9000)
})