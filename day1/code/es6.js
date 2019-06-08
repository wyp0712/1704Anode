/** 
 * 好的代码像粥一样，都是用时间熬出来的
*/

/**
 *  let 声明变量  const 声明常量
 * 
 * 
 * @param {var function }
 * 
 * var : 声明提升
 * 
 * 
 * @param {let}
 * 1. 没有声明提升
 * 2. 不能重复声明
 * 3. 块级作用域
 * 4. 暂时性死区：在代码块内，使用let命令声明变量之前，该变量都是不可用的。
 * 
 * 
 * @param {const} 声明常量 不能更改  const声明一个只读的常量。一旦声明，常量的值就不能改变。
 *  
 * 1. 不能重复声明
 * 2. 一旦声明，必须立马赋值
 * 
 * 
 * 
 * 
 * 
 * @param {es5 作用域}
 * 
 * 全局：window
 * 局部：函数作用域  function a() { }: 函数内容可以访问函数外部作用域。 函数外部访问不到函数内部作用域
 *  
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * @param { node 全局 global.process }
 * 
 */


 const a = 1

 const foo = {
   name: '特朗普'
 }

//  foo = {name: 1}
// var a = {}
// var b = {}

foo.name = '普京';
console.log(foo, 'foot---------1')
 


// console.log(global.process.title)

// const PI = '3.1415926' // Assignment to constant variable

// PI = '3.15'

// console.log(PI)



//  console.log(a) // var a;  a = 1;
//  var a = 1;
// console.log(a)
//  let a = 1;

// var a = 1;
// var a = 4;

// console.log(a, 'a---2')

// let a = 1;

// let a = 4;
// console.log(a, 'a---2')

// 块级作用域
// { 
//   let a = 1;
//   var b = 3; // Identifier 'a' has already been declared
// }
// console.log(b, 'a')

// for(let i = 0; i < 5; i++) {
//   console.log(i) // 
// }
// console.log(i, '外部i') // 

// {
//   greet = '14';

//   let greet = 'hello world'
// }






 
