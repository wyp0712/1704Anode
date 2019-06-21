


function regfn(name) {
  var str = 'http://127.0.0.1:80/admin?k1=v1&k2=v2  '
  var reg = /[?&](\w+)\=(\w+)/g;
  var re = null;
  re = reg.exec(str)
  while (re = reg.exec(str) != null) {
    // console.log(name)
    if (re[1] == name) {
      // console.log(name, 'name')
      return re[2]
    }
  }
}

// console.log(regfn('age'))



// console.log(reg.exec(str))

