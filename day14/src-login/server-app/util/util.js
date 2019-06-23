const fs = require('fs');;
const path = require('path')
const url = require('url');

// 读文件
function readfileFn(src) {
  return new Promise((resolve, reject) => {
    fs.readFile(src, (err, data) => {
      if (err) {
        reject(err)
        return;
      }
      resolve(data.toString())
    })
  })
}

module.exports = {
  readfileFn
}