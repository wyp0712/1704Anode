const fs = require('fs');
const path = require('path');
const obj = {};

// 生成子元素的json
const makeChildren = (src, obj) => {
  obj.children = [];
  let paths = fs.readdirSync(src);
  paths.forEach((item, index) => {
    let _src = path.join(src, item);
    if (fs.statSync(_src).isFile()) {
      obj.children.push({
        name: item,
        type: 'file'
      })
    } else if (fs.statSync(_src).isDirectory()) {
      obj.children.push({})
      exists(_src, obj.children[index])
    }
  })
}
const existsJson = (src, obj) => {
  if (fs.existsSync(src)) {
    let pathname = path.parse(src).name
    obj.name = pathname;
    obj.type = 'dir'
    makeChildren(src, obj)
  } else {
    return;
  }
  console.log(obj, 'obj')
}
// console.log(existsJson('./src'))




// 写入文件
// fs.writeFile('./a.json',JSON.stringify(obj), function(err, data) {
//   console.log(data)
// })

// console.log(JSON.stringify(obj), 'obj')

module.exports = {
  existsJson
}

