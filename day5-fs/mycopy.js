var fs = require('fs'),
  stat = fs.stat;
var copy = function (src, dist) {
  // 读取目录中的所有文件/目录
  fs.readdir(src, function (err, paths) {
    if (err) { throw err; }

    paths.forEach(function (path) {
      var _src = src + '/' + path,
        _dist = dist + '/' + path;

      fs.stat(_src, function (err, st) {
        if (err) { throw err; }
        // 判断是否为文件
        if (st.isFile()) {
         
          // fs.readFile(_src, function (err, list) {
          //   fs.writeFile(_dist, list, function () {
          //     console.log('success')
          //   })
          // })
          // 创建读取流
          let readable = fs.createReadStream(_src);
          // 创建写入流
          let writable = fs.createWriteStream(_dist);
          // 通过管道来传输流
          readable.pipe(writable);

        }
        // 如果是目录则递归调用自身
        else if (st.isDirectory()) {
          exists(_src, _dist, copy);
        }
      })
    });
  });
};

// 在复制目录前需要判断该目录是否存在，不存在需要先创建目录
var exists = function (src, dist, callback) {
  fs.exists(dist, function (exists) {
    if (exists) {  // 已存在
      callback(src, dist);
    }
    else { // 不存在
      fs.mkdir(dist, function () {
        callback(src, dist);
      });
    }
  });
};

// 复制目录

exists('./src', './dist', copy);