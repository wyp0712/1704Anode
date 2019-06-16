const fs = require('fs');
const config = require('./config.json');
// 根据config.json文件去创建文件和文件夹
const makedir = (config) => {
  // 判断当前文件夹在不在 不在就创建
  fs.exists(config.dirname, function (exists) {
    if (!exists) {
      fs.mkdir(config.dirname, function (err, data) {})
    }
    config.children.forEach(item => {
      if (item.dirname) {
        // src / css   src/js
        item.dirname = config.dirname + '/' + item.dirname;
        makedir(item)
      } else {
        // 如果是文件，就创建文件，
        fs.writeFile(config.dirname + '/' + item.filename, 'hello world', function () {
          console.log('创建文件成功了'+ `${config.dirname}/${item.filename}`)
        })
      }
    })
  });
}

makedir(config)