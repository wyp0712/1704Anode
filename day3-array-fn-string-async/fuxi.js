/**
 * @param {
 *   
 *  数组
 *    es5 push slice splice pop shift unshift concat reverse join('') 
 *    es6 fill   from keys values includes find flat
 * 
 *  字符串 ：
 *    JSON.stringify() 
 * 
 *    JSON.parse()
 * 
 *     Object.assign({}, {}) // 浅拷贝 *   JSON.parse( JSON.stringify()  )   深拷贝
 * 
 *     Object.is(NaN,NaN)  
 *    
 *     
 *   函数：
 *     箭头函数
 *     rest参数
 *
 * }
 * 
 * 
 * @param { 回调函数 promise  * async} 
 *  
 * @param {
 *   
 *  单线程 
 * 
 *  异步  ：
 * 
 *     
 *   
 *  }
 * 
 * */

let json = JSON.stringify({
  name: 1,
  age: 2
})

console.log(JSON.parse(json), 'json----1')




const steps = [
  {
    wait: 1,
    output: 'task a cost 1s'
  },
  {
    wait: 4,
    output: 'task b cost 4s'
  },
  {
    wait: 2,
    output: 'task c cost 2s'
  },
  {
    wait: 1,
    output: 'task d cost 1s'
  }
]

// 编写stepPromise函数实现按顺序打印output的内容，wait表示等待秒数，调用参考:
function stepPromise(opt) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(opt.output)
    }, opt.wait * 1000);
  })
}
let progress = async () => {
  await stepPromise(steps[0]).then(res => {
    console.log(res, 'res')
  })
  await stepPromise(steps[1]).then(res => {
    console.log(res)
  })
  await stepPromise(steps[2]).then(res => {
    console.log(res)
  })
  await stepPromise(steps[3]).then(res => {
    console.log(res)
  })

  return 'hello world'
}

progress()





