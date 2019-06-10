var funcs = []
for (var i = 0; i < 10; i++) {
   
  // funcs.push(function () {
  //   console.log(i)
  // })
  (function(i) {
    funcs.push(function() {
      console.log(i)
    })
  })(i)


  // (function(i) {
  //   // console.log(i)
  //   funcs.push(function() {
  //     console.log(i)
  //   })
  // })(i)

}
funcs.forEach(function (func) {
  func(); //输出十个10
})
