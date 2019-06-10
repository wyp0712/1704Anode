const funcs = []
for (let i = 0; i < 10; i++) {
  funcs.push( function () {
    console.log(i)
  })
}

funcs.forEach(function (func) {
  console.log(func, 'cunc')
  func(); // 输出十个10
})