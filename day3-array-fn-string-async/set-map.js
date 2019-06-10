/**
 * set  里面的内容不会重复(数组去重)
 * Set 是一个构造函数，可以通过new的方式创造一个实例,这个实例就可以调用Set.prototype上面的方法及属性
 * add() => 给实例添加一项，重复内容添加无效，返回值是添加之后新的set结构
 * delete() => 删除实例中的某一项，返回值是boolean，删除失败返回false
 * clear() => 删除实例中所有项，修改原实例
 * has() => 判断实例中有没有某一项，返回值是boolean
 * size => 返回实例中项目的长度
 * keys()  values()  entries()  使用for...of 去遍历
 */

const a = {}
const b = 1
const c = 'ScriptOJ'
const d = 'ddd'

const set1 = new Set([a, b, c, d])
const set2 = new Set([a, b, c])

const arr1 = [...set1];
const arr2 = [...set2];

console.log(arr1.length,  arr2.length)

// if (arr1.length === arr2.length) {
  let arr3 =  arr1.every((item,index) => {
    console.log(item, arr2[index], '---------1')
   return item === arr2[index]
  })
  console.log(arr3, 'arr3')
// }



// console.log(set1)
// console.log(set2)
//  var s1 = new Set(['a','b'])


//  console.log(s1)
//  console.log('=========================entries')

//  for(var k of s1.entries()) {
//      console.log(k)
//  }
//  console.log('=========================keys')
//  for(var k of s1.keys()) {
//     console.log(k)
//  }
//  console.log('=========================values')

//  for(var k of s1.values()) {
//     console.log(k)
//  }

 /**
  * map 的解构类似于一个对象object => 键值对
  * set(键名，键值) 给实例添加一组键值对
  * get(键名) 返回对应键名的键值
  * size属性，可以获取长度
  */
//   var obj = {1:"zs", "age": 20}
//   console.log(obj.size)
  var m1 = new Map([["zs", 90], ["ls", 100]])
  console.log(m1)

//   // [1,2,3]和[1,2,3]地址不同
//   m1.set([1,2,3], "content")
//   m1.get([1,2,3]) // undefined

//   var arr = [4,5,6];
//   m1.set(arr, "content2")
//   m1.get(arr) // content2

   // console.log('=========================entries')

 for(var k of m1.entries()) {
   //   console.log(k)
 }
//  console.log('=========================keys')
 for(var k of m1.keys()) {
   //  console.log(k)
 }
//  console.log('=========================values')

 for(var k of m1.values()) {
   //  console.log(k)
 }
  
