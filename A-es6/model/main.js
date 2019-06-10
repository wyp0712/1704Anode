// 
// 3     重要的两个对象：
// 4     require是从外部获取模块
// 5     exports是把模块接口公开
// 如果同时调用module.exports和exports，他会抛出的是module.exports

/**
 * @param { module.exports ===  exports };
 * 
 * 1. 一个Node.js文件就是一个模块，这个文件可能是Javascript代码、JSON或者编译过的C/C++扩展。
 * 2. require是从外部获取模块
 * 3. exports是把模块接口公开
 * 4. 如果同时调用module.exports和exports，他会抛出的是module.exports
 * 
 * 
 * 
 */

var app = require('./index');
const json = require('./msg.json');
// console.log(json, 'json')
// console.log(exports === module.exports)
// console.log(app.setIncrement(1212), 'app-----1')



// module.exports 初始值为一个空对象 {}
// exports 是指向的 module.exports 的引用
// require() 返回的是 module.exports 而不是 exports

// 从打印我们可以看出，module.exports和exports一开始都是一个空对象{}，实际上，这两个对象指向同一块内存。这也就是说module.exports和exports是等价的（有个前提：不去改变它们指向的内存地址）。

console.log(exports)
console.log(module.exports)

// require引入的对象本质上是module.exports。这就产生了一个问题，
// 当 module.exports和exports指向的不是同一块内存时，exports的内容就会失效。
// 只要不是直接导出对象，使用module.exports和exports没有区别，要是导出的对象只能使用module.exports


// console.log(app, 'app')
// console.log(app, 'app')
// console.log(app, 'app')
// console.log(app, 'app')
// console.log(app, 'app')





