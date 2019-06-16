const config = require('./config.json');
const fs = require('fs');
const path = require('path')
const makedir = (config) => {
  let exist = fs.existsSync(config.dirname)
  if (!exist) {
    fs.mkdirSync(config.dirname)
  }
  config.children.forEach(item => {
    // src/css src/js
    if (item.dirname) { // 文件夹
      item.dirname = path.join(config.dirname, item.dirname)
      makedir(item)
    } else { // 文件
      fs.writeFileSync(path.join(config.dirname, item.filename), 'hello world')
    }
  });
}
makedir(config)
const copy = (src, dist) => {
  let conPaths = fs.readdirSync(src)
  conPaths.forEach(item => {
     let _src = path.join(src, item),
         _dist = path.join(dist, item);
      // console.log(_src, _dist)   
      if(fs.statSync(_src).isFile()) {
        // 如果是文件 读文件 写文件
       fs.createReadStream(_src).pipe(fs.createWriteStream(_dist) )
      } else if (fs.statSync(_src).isDirectory()) {
        exists(_src, _dist, copy)
      }
  })
}

const exists = (src, dist) => {
  if (fs.existsSync(dist)) {
    copy(src, dist)
  } else {
    fs.mkdir(dist, function () {
      copy(src, dist)
    })
  }
}

module.exports = {
  exists
}

