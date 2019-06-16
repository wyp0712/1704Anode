// const { exists } = require('./app')

const fs = require('fs');
const path = require('path');

// console.log(exists)
// exists('./src', './hello')


/**
 * 1. 先判断src 在不在 不在return
 * 2. 读文件夹 删除
 * 
 */

function del (src) {
  if (!fs.existsSync(src)) {
    return
  }
  let paths = fs.readdirSync(src);
  paths.forEach(item => {
    if (fs.statSync(path.join(src, item)).isFile()) {
      fs.unlinkSync(path.join(src, item))
    } else {
      del(path.join(src, item))
    }
  })
  fs.rmdirSync(src)
}

// del('./a')



