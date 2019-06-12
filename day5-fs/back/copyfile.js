const fs = require('fs');
// const {readFile, writeFile} = require('fs')
// function copyfile(source, target) {
//     fs.readFile(source, 'utf-8', (err, con)=>{
//         if (err) {
//             throw err;
//         }
//         fs.writeFile(target, con,() => {
//             console.log('复制成功')
//         })
//     })
// }
// copyfile('./a.txt', './src/css/b.txt')

const copyfile = (source, target) => {
    fs.readFile(source, 'utf-8', (err, data) => {
        if (err) {
            throw err;
            return
        }
        fs.writeFile(target, data, () => {
            console.log('复制成功')
        })

    })
}

copyfile('./src/css/index.css', './src/index.html')