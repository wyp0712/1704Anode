/** 
 * @param { fs 文件 文件夹  }
 * 
*/
const fs = require('fs');
function copyFile(src, dist) {
   fs.readFile(src, function(err, data) {
     if (err) throw err;
     fs.writeFile(dist, data, function(err, list) {
       console.log('复制成功')
     })
   })
}
copyFile('./config.json', './a.json')



