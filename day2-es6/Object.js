
/** 
 * 
 * @param {Array.from() 将类数组 -> 数组}
 *  
 * 下标  length
 *  ... 扩展运算符
 * 
 * */
// console.log(  [...[1, 2, 3]])
// const str = '121324';  // 下标  length
// console.log(Array.from(str), 'str')
// console.log([...str], 'str---1')
// console.log([...[1, 2, 3]])
// new Set()
/** 
 * @param { Object.values Object.keys }  返回的都是数组
 *  
 * 
*/
// var arr = ['abc', 'def', '234'];

// var  obj = [
//   {
//     name: 'devin',
//     age: 1
//   },
//   {
//     name: 'devin',
//     age: 1
//   }
// ]

// var obj1 = {
//   name: 'devin',
//   age: 1
// }

// console.log(Object.values(obj1), '111') // 
// console.log(Object.keys(obj1), '111')
// console.log(Object.values(arr), 'object---red')
// console.log(Object.keys(arr)) // 下标


/** 
 * @param { Object.is() } 做比较 
 * 
 * { 0, -0}
 * {NaN, NaN}
*/
// console.log(Object.is(0, -0))
// console.log(0 === -0)
// console.log(NaN === NaN)
// console.log(Object.is(NaN, NaN))
// console.log(arr.includes('abc'))
// console.log(arr[0].includes('a'))


/** 
 * 
 * @param {Object.assign()}
 * 
*/



/** 
 * 
 * @param {Object.getOwnPropertyDescriptors()}
 * 
 * 
*/
const obj = {
  foo: 123,
  get bar() { return 'abc' }
};

console.log(Object.getOwnPropertyDescriptors(obj), 'oibj1')



/**
 * Object.entries()
 * 
 * 
 */