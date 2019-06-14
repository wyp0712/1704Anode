
// 拷贝函数
const copy = (src, dist) => {
  fs.readdir(src, (err, paths) => {  // src 
    // [ ad.js index.html ] 
    paths.forEach(item => {
      // 获取路径
      let _src = src + '/' + item,
        _dist = dist + '/' + item;
      fs.stat(_src, (err, stat) => {
        if (stat.isFile()) {
          // createReadStream
          let readestream = fs.createReadStream(_src)
          let writestream = fs.createWriteStream(_dist)
          readestream.pipe(writestream)
        } else if (stat.isDirectory()) {
          exists(_src, _dist, copy)
        }
      })
    })
  })
}

// 判断 dist 存在不存在 函数
const exists = (src, dist, copy) => {
  fs.exists(dist, function (exists) {
    if (exists) { // 存在
      copy && copy(src, dist) // 拷贝
    } else { // 不存在
      fs.mkdir(dist, function () {
        copy && copy(src, dist) // 拷贝
      })
    }
  })
}

module.exports = {
  exists
}

// exists(__dirname + '/src', __dirname + '/dist', copy)
