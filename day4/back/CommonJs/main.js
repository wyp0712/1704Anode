/** 
 * 
 * @param { 
 *   前端模块化：
 *     CMD 规范：seaJs      
 *     AMD 规范：requireJs  
 *     E6 模块化
 * 
 *   }
 * 
 * @param { 
 *      服务端模块化: CommonJS
 *       
 *      }
 * 
 * 1. 定义模块
 * 2. 导出模块
 * 3. 引用模块
 * 
 * 一个js 就是模块 
 * 
 * 引入json
 * 
*/

// module.exports = 

const animate = () => {
  console.log('我是animate')
}


const add = () => {
  let a = 0;
  console.log(a ++)
}


module.exports = {
  add
}


