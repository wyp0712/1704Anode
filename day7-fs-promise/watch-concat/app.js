
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



// 根据传入的src的路径去 copy文件
const copy = (src, dist) => {
  fs.readdir(src, function (err, paths) {
    paths.forEach(item => {
      // 拼接路径
      let _src = src + '/' + item,
        _dist = dist + '/' + item
      // 判断是文件还是文件夹
      fs.stat(_src, function (err, stat) {
        if (stat.isFile()) {
          // 这个是读文件写文件
          // fs.readFile(_src, function(err, data) {
          //   fs.writeFile(_dist, data, function(err, data) {
          //     console.log('success')
          //   })
          // })  

          // 如果有大文件的话 可以用这个更快 大文件
          fs.createReadStream(_src).pipe(fs.createWriteStream(_dist))
          // let read = fs.createReadStream(_src);
          // let write = fs.createWriteStream(_dist);
          // read.pipe(write);

        } else if (stat.isDirectory()) {
          // 如果是文件夹，递归调用重新创建文件夹，拷贝文件
          exists(_src, _dist, copy)
        }
      })
    })
  })
}

// 判断dist
const exists = (src, dist) => {
  fs.exists(dist, function (exists) {
    if (exists) {
      copy && copy(src, dist)
    } else {
      fs.mkdir(dist, function (err, data) {
        // console.log('文件夹创建成功')
        copy && copy(src, dist)
      })
    }
  })
}

// exists(__dirname + '/src', __dirname + '/dist')

module.exports = {
  exists
}




