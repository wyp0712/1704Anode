
function noRepeatfn1(arr) {
  return [...new Set(arr)]
}

// Set()  

// noRepeatfn1(arr)


function noRepeatfn2(arr) {
  // 高阶函数： 用 函数去操作函数 的函数  回调函数：一个函数 作为参数， 传递另一个函数中，并且执行
  () => { }
  return arr.reduce((per, cur) => {
    per.indexOf(cur) === -1 && per.push(cur)
    return per
  }, [])
}

// console.log(noRepeatfn2(arr), 'arr---fn2')

function noRepeatfn3(arr) {
  return arr.filter((item, index, self) => {
    return self.indexOf(item) === index
  })
}

// console.log(noRepeatfn3(arr), 'fn3-----')

// module.exports = noRepeatfn1

module.exports = {
  noRepeatfn1,
  noRepeatfn2,
  noRepeatfn3
}

