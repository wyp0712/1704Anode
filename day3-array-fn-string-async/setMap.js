// /**
//  * 
//  * @param { some } 
//  *  
//  * 
//  * 
//  * @param { every }
//  * 
//  * 
//  * 
//  * 
//  * @param { filter }
//  * 
//  */

// const a = {};
// const b = 1;
// const c = 'ScriptOJ';
// const d = 'hello world'

// const set1 = [...new Set([a, c, b])]
// const set2 = [...new Set([a, c, b])]

// if (set1.length === set2.length) {
//   let flag = set1.every((item, ind) => {
//     return item === set2[ind]
//   })
//   console.log(flag, 'flag')
// }


// /**
//  *  reduce
//  * */
// const arr = [
//   {
//     num: 0
//   },
//   {
//     num: 3
//   },
//   {
//     num: 5
//   }];

// // 将该数组转换为对象：

// let obj = {
//   a: 0,
//   b: 1,
//   c: 2,
//   d: 3
// }

// // 请使用数组的reduce函数实现上述要求
// // let num = 0;
// // let objA = arr.reduce((per, cur) => {
// //   per[cur] = num++;
// //   return per
// // }, {})
// let total = arr.reduce((per, cur) => {
//   return per + cur.num
// }, 0)
// console.log(total, 'total')

// const testArr = [
//   {
//     "id": 0
//   },
//   {
//     "id": 1
//   },
//   {
//     "id": 2
//   },
//   {
//     "id": 3
//   },
//   {
//     "id": 4
//   },
//   {
//     "id": 5
//   }
// ]

// function pageFilter(page, size) {
//   //filter
//   let status = testArr.filter((item, index) => {
//     // 0 * 5   0 + 1 * 5
//     // 0 ----5
//     // 1 * 5   2 * 5
//     // 5 -- - 10

//     return index >= page * size && index < (page + 1) * size
//   })
//   console.log(status, 'status')
// }










/**
 * @param { set }
 * 
 * 1. ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。
 * 2. Set本身是一个构造函数，用来生成 Set 数据结构。
 * 3. Set函数可以接受一个数组（或者具有 iterable 接口的其他数据结构）作为参数，用来初始化。
 * 4. 向 Set 加入值的时候，不会发生类型转换，所以5和"5"是两个不同的值。
 * 5. 另外，两个对象总是不相等的。
 * 
 */

//  let sss = [...new Set([
//   "name"
//  ])]

// let s2 = ['name','age']
// // console.log(sss.has('2'), 'has----has')
//  console.log(Object.entries(sss), '---')


// let s3 = {
//   name: 'hello',
//   age: 'world'
// }
// for(let k of s3) {
//   console.log(k)
// }


/**
 * @param {  Set实例 方法分为两大类： }
 * 
 * @param { 操作方法 }；
 *  1. add(value)：添加某个值，返回 Set 结构本身。
 *  2. delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
 *  3. has(value)：返回一个布尔值，表示该值是否为Set的成员。
 *  4. clear()：清除所有成员，没有返回值。
 * 
 * @param { 遍历方法 }
 * 
 *  1. keys()：返回键名的遍历器
 *  2. values()：返回键值的遍历器
 *  3. entries()：返回键值对的遍历器
 *  4. forEach()：使用回调函数遍历每个成员
 * 
 * 
 * 
 * @param {
 *       数组的map和filter方法也可以间接用于 Set 了。
 *   
 *       遍历的应用 扩展运算符（...）内部使用for...of循环，所以也可以用于 Set 结构。
 *       let set = new Set(['red', 'green', 'blue']); let arr = [...set];
 *    }
 * 
 *   因此使用 Set 可以很容易地实现并集（Union）、交集（Intersect）和差集（Difference）。
 * 
 */

// s.add(1).add(2).add(2);  // 注意2被加入了两次

// s.size // 2

// s.has(1) // true
// s.has(2) // true
// s.has(3) // false

// s.delete(2);
// s.has(2) // false

// const s = new Set();
// [2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));
// for (let i of s) {
//   console.log(i);
// }
// const s = new Set([5, '5']);
// console.log(s, 's')
// Set的写法
// const properties = new Set();
// properties.add('width');
// properties.add('height');
// console.log(properties, 'properties')

/**
 *
 * @param { Map }
 *
 * 1. ES6 提供了 Map 数据结构
 * 2. 它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。
 *
 *
 */
