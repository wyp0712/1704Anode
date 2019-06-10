// let incrementNum = 0;

/**
 * 
 * @param { 
 *      exports.[function name] = [function name] 
 *      moudle.exports= [function name]
 *      }
 * 
 *   **exports **返回的是模块函数
 *   **module.exports **返回的是模块对象本身，返回的是一个类
 *    exports是module.exports的一个引用，exports指向的是module.exports
 * 
 *  */


 let num = 0;
 function add(val) {
   num++
  
 }

 module.exports =  new Date()
