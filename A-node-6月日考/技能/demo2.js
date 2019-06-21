let funcs = []
for (var i = 0; i < 10; i++) {
  (function(i) {
    funcs.push(function() {
      console.log(i)
    })
  })(i)
}
funcs.forEach(function (func) {
  func(); //输出十个10
})
