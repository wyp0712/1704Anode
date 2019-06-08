/**
 * @param {Object}
 * 
 * Object.assyin({}, {}) 会修改第一个参数对象
 * Object.is(0, -0) 可以部分代替 === 去判断两个值是否相等 0  -0
 * 
 *  Object.getOwnPropertyDescriptor(哪个对象，这个对象的简明键名)
 *  获取自身属性描述器， 返回值
 * 
 *  value -> 键名所对应的键值
 *  configurable: true 是否可配置
 *  enumerable: true 时否可以被枚举
 *  writable: true 是否可以被修改
 * 
 *  */

 const msg = {
   user: 'devin',
   pwd: '123'
 }

 Object.defineProperty(msg, 'user', {
  configurable: true,
  enumerable:true,
  writable:true
 })


 console.log(Object.is(0, -0))
 console.log(Object.is({}, {}))

 Object.getOwnPropertyDescriptor()