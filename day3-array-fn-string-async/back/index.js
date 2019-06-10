/**
 * 
 * @param { class }
 * 
 * @param { some every filter }
 * 
 * 
 * @param { Object  function  Array  解构赋值  Set Map}
 * 
 * @param { 
 *         Object.is()
 *         Object.assign() 
 * 
 *         Object.getOwnPropertyDescriptors()  回指定对象所有自身属性（非继承属性）的描述对象。
 * 
 *         Object.keys()
 *         Object.values()
 *         Object.entries() Object.entries()方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值对数组。
 *       }
 * 
 * @param {
 *           Set
 *        }
 * 
 * 
 * 
 * 
 * 
 * */

// 作为构造函数，Map 也可以接受一个数组作为参数。该数组的成员是一个个表示键值对的数组。
const map = new Map([
  ['0', 'hello world'],
  ['1', '中国']
]);

// console.log(map, 'map')


// 函数

// ES6 允许为函数的参数设置默认值，即直接写在参数定义的后面。

function logs(x, y = '100') {
  console.log(x, y)
}

// logs(1)

// 参数变量是默认声明的，所以不能用let或const再次声明。
function foo(x = 5) {
  let x = 1; // error
  const x = 2; // error
}
// 使用参数默认值时，函数不能有同名参数。




const arr = [1,2,3,4,5,6];

const userData = {
  user: 'devin',
  pwd: 123
}

const listData = [
  {
    user: 'devin',
    pwd: 321
  },
  {
    user: 'wyp1',
    pwd: 123
  },
  {
    user: 'wyp2',
    pwd: 321
  }
]

let flag = listData.some((item, index) => {
  console.log(item, 'item')
  return item.user === userData.user;
})
console.log(flag, 'flag')
let flags = listData.every((item, index) => {
  return item.pwd > 3; 
})
console.log(flags, 'flags')








