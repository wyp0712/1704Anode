let config = require('./config.json');
// console.log(config)

// 　　以同步的方法检测目录是否存在。
// fs.existsSync(config.dirname);
// 　　如果目录存在 返回 true ，如果目录不存在 返回false
const fs = require('fs');

// 异步的方法封装检测目录方法
// fs.exists(config.dirname, function(err, data) {
//     console.log(err)
// })
fileFn(config)
function fileFn(config) {
    let isExists = fs.existsSync(config.dirname)
    console.log(isExists, 'isEx')
    if (!isExists) {
        fs.mkdirSync(config.dirname)
    }
    config.children.forEach(item => {
        //   console.log(item, 'item====1')
        if (item.dirname) {
            item.dirname = config.dirname + '/' + item.dirname;
            fileFn(item)
        } else {
            console.log(config.dirname)
            fs.writeFileSync(config.dirname + '/' + item.filename, 'hello world');
        }
    })
}




