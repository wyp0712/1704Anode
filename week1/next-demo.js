/**
 *  迭代器
 */
//  .next().value

function makeIterator(arr) {
  let nextIndex = 0;
  // return {
  return (function(nextIndex) {
    // console.log(this, 'this---1')
      return {
        value: arr[nextIndex++],
        done:  nextIndex < arr.length ? false : true
      }
    })(nextIndex)

  // }
}

const arr = ['吃饭',' 睡觉', '打游戏']
const it = makeIterator(arr)
// 1. 2. 

console.log(it)
console.log(it)
console.log(it)
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())