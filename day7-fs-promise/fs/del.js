/**
 * 封装一个方法，接收一个文件夹路径，删除此文件夹
 * 1. 判断你传的路径是否存在，如果不存在，return
 * 2. 获取里面的直接子文件 readdir => 由每一个子文件的文件名组成的数组
 * 3. 遍历这个数组 item=>每一个子文件的名字
 * 3.1 如果是文件夹  递归
 * 3.2 如果是文件  unlink
 * 4. 删除空文件夹
 * 
 * nodejs 内置模块 path
 * path.join(a,b,c,d,....)
 * path.join('src','./css')   ./src/css
 * path.join('src', '../css')
 */

const fs = require('fs')
const path = require('path')
// console.log(path.join('src', '../css'))





function del(src) {
    if (!fs.existsSync(src)) {
        return;
    }
    let conArr = fs.readdirSync(src)
    // console.log(conArr)
    conArr.forEach(item => { // css
        if (fs.statSync(path.join(src, item)).isFile()) { // 文件
            fs.unlinkSync(path.join(src, item))
        } else {
            del(path.join(src, item))
        }
    })
    fs.rmdirSync(src)
}
//  del('./src')

// function delFn(src) {
//     if (!fs.existsSync(src)) {
//         return;
//     }
//     let paths = fs.readdirSync(src)
//     paths.forEach(item => {
//         if (fs.statSync(path.join(src, item)).isFile()) {
            
//             fs.unlinkSync(path.join(src, item))
//         } else {
//             console.log(path.join(src, item), '----2')
//             delFn(path.join(src, item))
//         }
//     })
//     fs.rmdirSync(src)
// }
// delFn('./src')





