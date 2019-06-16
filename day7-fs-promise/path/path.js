const path = require('path')
const fs = require('fs');

// 拼接
console.log( path.join(__dirname, 'css') )
// 解析
console.log( path.resolve(__dirname , '/bar') )
// 后缀名
console.log(path.extname('./path.js'))
// 解析路径
console.log(path.parse('path/css/index.css'))
// 找文件夹
console.log(path.dirname('path/css/index.css'))

console.log(	path.format({root: '',
dir: 'path/css',
base: 'index.css',
ext: '.css',
name: 'index' }))






// console.log( path.join(__dirname, 'css') )

// console.log( path.resolve(__dirname , '/bar') )

// fs.mkdir(path.join(__dirname, 'css'), function() {})
// console.log(path.normalize('var/www/index.html'))

// 
// console.log( path.join('./path', './css') )
// path.resolve() 方法会把一个路径或路径片段的序列解析为一个绝对路径
// path.resolve([…paths])里的每个参数都类似在当前目录执行一个cd操作，返回的是最后的当前目录，
// console.log( path.resolve(__dirname) )




// // 给定的路径的序列是从右往左被处理的，后面每个 path 被依次解析，直到构造完成一个绝对路径。 例如，给定的路径片段的序列为：/foo、/bar、baz，则调用 path.resolve('/foo', '/bar', 'baz') 会返回 /bar/baz。
// console.log(path.resolve('/foo/', 'bar', 'baz'))


// // 规范化路径
// console.log(path.normalize('var/www/index.html'))
// console.log(path.resolve('foo/bar', '/tmp/file/', '..', 'a/../subfile'))



