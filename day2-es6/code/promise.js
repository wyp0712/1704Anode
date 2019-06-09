/**
 * @param { promise }
 * 
 * @param { 同步 异步 }  
 *  同步：
 *  异步：Dom监听  定时器  ajax ...
 * 
 * @param { 解决异步 }
 * 
 * 解决异步： 
 * 
 *  1. 回调函数 ：一个函数 作为参数 传递到另一个函数中，并且执行  
 *                  函数在执行的过程中，会将实参传递给形参
 *  2. promise
 *  3. Generator 函数
 *  4. async 函数
 */



/**
 * @param { 回调函数模式 }  电话线
 */


// function animate(fn) {
//   setTimeout(() => {
//     fn && fn('动画结束了')
//   }, 3000)
// }
// animate(function(res) {
//    console.log(res, 'res')
// })


/**
 * 
 * @param { promise 模式 } 手机
 * 
 *   new Promise( (resolve, reject) => { } ) }
 *   p ---  resolve
 *   p ---  reject
 * 
 *  pedding 进行中 
 *  resolve  成功
 *  reject   失败 
 *  
 *  注意点： 
 *    1. 状态不可逆
 *    2. 放在函数中使用
 * 
 * */

// function animate() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('动画结束了')   
//     }, 3000)
//   })
// }
// animate().then(res => {
//   console.log(res, 'promise---res')
// })

 
// function fn () {
// const promise = new Promise((resolve, reject) => {
//   console.log('hello world----1')
//   resolve('成功状态')
// })
// promise.then(res => {
//   console.log(res, 'res')
// })
// console.log('我在外面')
// return promise;
// }


/**
 *  
 * @param { 异步案例效果：红绿灯 （黄灯 2s 红灯 3s 绿灯 4s） }
 * 
 */

// setTimeout(() => {
//   console.log('绿灯')
// }, 4000)

// setTimeout(() => {
//   console.log('红灯')
// }, 3000)

// setTimeout(() => {
//   console.log('黄灯')
// }, 2000)

/**
 *  
 * @param { 
 *    回调函数版本红绿灯;
 * 
 *    回调地狱问题：  
 *      解决方案：promise实例.then 链式调用}
 *
 * */

// function animate(time, name, fn) {
//   setTimeout(() => {
//     fn && fn(`name:${name}`)
//   }, time)
// }
// animate(4000, '绿灯', function(res) {
//  console.log(res)
//   if (res) {
//     animate(3000, '红灯', function(data) {
//       console.log(data, 'dta')
//       if (data) {
//         animate(2000, '黄灯', function(list) {
//           console.log(list, 'dta')
//         })
//       }
//     })
//   }
// })


/**
 * 
 * @param { promise 版本红绿灯效果 }
 * 
 */
// function animate(time, name) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`name:${name}`)
//     }, time)
//   })
// }
// .then链式调用
// animate(4000, 'green')
//   .then(res => {
//     console.log(res)
//     return animate(3000, 'red')
//   })
//   .then(data => {
//     console.log(data)
//     return animate(2000, 'yellow')
//   })
//   .then(list => {
//     console.log(list)
//   })

/**
 * @param { Generator  了解} 
 * */


/** 
 * 
 * @param { async 函数 ---> 回调终点 } 引入此方案
 *  
 *  async    以一种同步的方式输出异步
 *  async function () {} 说明函数中有异步操作
 *  await  后面必须跟promise 实例
 * 
 * async函数返回一个 Promise 对象。
 * async函数内部return语句返回的值，会成为then方法回调函数的参数。
 * async函数返回一个 Promise 对象，可以使用then方法添加回调函数。
 * 当函数执行的时候，一旦遇到await就会先返回，等到异步操作完成，再接着执行函数体内后面的语句。
 * 
 * */

function animate(time, name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`name:${name}`)
    }, time)
  })
}

async function hander() {
  await animate(4000, 'green').then(res => {
    console.log(res, 'res')
  })
  await animate(3000, 'red').then(res => {
    console.log(res, 'res')
  })
  await animate(2000, 'yellow').then(res => {
    console.log(res, 'res')
  })
}
hander()
























