/**
 *  
 * @param { class }
 * 
 *  1. constructor方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。一个类必须有constructor方法，如果没有显式定义，一个空的constructor方法会被默认添加。
 *  2. constructor方法默认返回实例对象（即this）
 *  3. constructor方法默认返回实例对象（即this），完全可以指定返回另外一个对象。
 *  
 *  语法糖
 * 
 */

// class Animate {
//   constructor() {
//     console.log(this, 'this')
//     this.add = this.add.bind(this)
//   }

//   add() {
//     console.log(this, 'this')
//     this.remove()
//   }

//   remove() {
//     console.log('我是remove函数')
//   }

// }
// let p = new Animate()
// let { add, remove } = p; // 解构赋值
// console.log(add, remove)

// add()




class BaseModel {
  constructor(data, msg) {
     this.data = data;
     this.msg = msg;
  }

}
// 子
class SuccessModel extends BaseModel{
  constructor(data, msg) {
    super(data, msg) // 调用父
    this.num = 1;
  }
}
class ErrorModel extends BaseModel{
  constructor(data, msg) {
    super(data, msg) // 调用父
    this.num = 0; // this 必须在父类调用之后使用
  }
}


let p = new SuccessModel({'name':'bawei'}, '登陆成功')

let p1 = new ErrorModel({'name':'bawei'}, '登陆错误')
// console.log(p)
// console.log(p1)

// class 购物车功能 全选反选
// 在子类的构造函数中，只有调用super之后，才可以使用this关键字
// 第一种情况，super作为函数调用时，代表父类的构造函数。ES6 要求，子类的构造函数必须执行一次super函数。
// 因此super()在这里相当于A.prototype.constructor.call(this)。

class Loger {
   constructor() {

   }
   init() {

   }
   render() {

   }
}



// const crr = ['12','32','132']

// for(let key of crr) {
//   console.log(key)
//   console.log(crr)
// }
const a = {}
const b = 1
const c = 'ScriptOJ'

const set1 = new Set([a, b, c, 'd'])

const set2 = new Set([a, c, b])

// console.log(set1.size)
// console.log(set2.size)

const isSameSet = (set1, set2) => {
  
}



isSameSet(set1, set2)


const set3 = new Set(['hello world', 'dvin']);

for(let key of set3) {
  // console.log(key, 'key')
}


// isSameSet(set1, set2) // => true

// 完成 isSameSet 函数，它接受了两个 Set 对象作为参数，请你返回 true/false 来表明这两个 set 的内容是否完全一致？

// let isSameSet = ()=>{
//     //请完成此函数的逻辑实现上述要求
//     //code...
// }


const arr=['a','b','c','d',];

// 将该数组转换为对象：

let obj = {
    a:0,
    b:1,
    c:2,
    d:3
}

// 请使用数组的reduce函数实现上述要求
let num = 0;
let  d = arr.reduce((per, cur) => {
   per[cur] = num++;
   return per;
}, {})

console.log(d, 'a')
