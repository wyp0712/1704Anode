
/**
 * 
 * @param { 迭代器 依次获取到每一个值 }
 *  */
function makeIterator(arr) {
  let nextIndex = 0;
  return {
    // next() 返回结果对象
    next: () => {
      return {
        value: arr[nextIndex++],
        done: nextIndex < arr.length ? false : true
      }
    }
  }
}

const it = makeIterator(['吃饭', '睡觉', '打豆豆', ['hello','world']]);

console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())


