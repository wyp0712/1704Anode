/** 
 *  AMD require.js
 *  CMD sea.js 
 *  ES6 模块化
 *  CommonJS 服务端nodejs 
 * 
 *  模块化：
 * 
 *  define([],function(){ return  })
 *  
 *  定义：一个js就是一个模块
 *  引入：
 *  抛出：
 *  
 * */


function cal(a, b) {
  return a * b
}
function auto() {
  return 'hello world'
}

module.exports = {
  cal,
  auto
}


