const {mkdir,rmdir, readdir, readFile, copyFile, unlink} = require('./fsPro');

copyFile('./aaa.js', '1112.txt')

readdir('./src').then(res => {
  console.log(res, 'res')
})

rmdir('./src/js/app')

readFile('./del.js').then(res => {
  console.log(res)
})

unlink('./1112.txt')
