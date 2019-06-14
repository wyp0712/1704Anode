const fs = require('fs');

const copy = (src, dist) => {
  // console.time('amzing')
  // 第一步，需要知道 src 有什么
  fs.readdir(src, function (err, paths) {
    paths.forEach(item => {
      // console.log(item)
      let _src = src + '/' + item,
        _dist = dist + '/' + item
      // console.log(_src)
      fs.stat(_src, function (err, stat) {
        
        if (stat.isFile()) {
          // 流
          console.time('amzing')
          let size = stat.size;
          let movieLen = 0;
          let readstrem = fs.createReadStream(_src);
          let writestrem = fs.createWriteStream(_dist);
          readstrem.pipe(writestrem)

          
          // fs.readFile(_src, function (err, data) {
          //   // console.log(data)
          //   fs.writeFile(_dist, data, function () {
          //     console.log('读取成功')

          //   })
          // })
        } else if (stat.isDirectory()) {
          // console.time('amzing')
          exists(_src, _dist, copy)
          // console.timeEnd('amzing')
        }
      })
    })

  })
}


// 判断dist 文件夹在不在函数
const exists = (src, dist, fn) => {
  fs.exists(dist, function (exists) {
    if (exists) { // 在的话  拷贝
      fn && fn(src, dist)
    } else { // 不在 创建
      fs.mkdir(dist, function () {
        fn && fn(src, dist)
      })
    }
  })


}

exists('./src', './dist', copy)





