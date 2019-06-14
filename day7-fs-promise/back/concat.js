/**
 * 监听js/index.js文件，只要有修改并且保存了，就会将index.js里面的内容放到dist/main.js
 */
const fs = require('fs')

//  let source = 'js/index.js'
//  let target = 'dist/main.js'

//  function concat(source,target) {
//     fs.readFile(source, 'utf-8', (err, con) => {
//         if (err) throw err;
//         fs.writeFileSync(target, con)
//     })
//  }
//  concat(source, target)
//  fs.watch(source, () => {
//      concat(source, target)
//  })

let src = './src/js/app/index.js';
let dist = './main.js'

function concatFn(src, dist) {
    fs.readFile(src, 'utf-8', function(err, data) {
        if(err) throw err;
        fs.writeFileSync(dist, data)
    })
}

fs.watch(src, () => {
    concatFn(src, dist)
})