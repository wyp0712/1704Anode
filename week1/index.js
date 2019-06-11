// Array.from()
var utils = {

  toArray(array_like) {//类数组
    var ary = [];
    try {
      ary = Array.prototype.slice.call(array_like);//通过call方法将this指向array_like，此时方法中的this就是array_like，这样就可以调用数组Array原型上的方法了。
    } catch (e) {
      for (var i = 0; i < array_like.length; i++) {
        ary[ary.length] = array_like[i];//将类数组中的每一项都传到数组ary中。
      }
    }
    return ary;
  }
}

// return {
//   utils //将返回值toArray赋值给toArray。这样函数外面就可以接受到函数返回的数据了。
// }

function test(a, b, c, d) {
  var arg = Array.prototype.slice.call(arguments);
  console.log(arg);
}
test("a", "b", "c", "d"); //b,c,d
// Array.prototype.slice.call(arguments)能将具有length属性的对象转成数组，除了IE下的节点集合（因为ie下的dom对象是以com对象的形式实现的，js对象与com对象不能进行转换） 


// 补充： 
// 将函数的实际参数转换成数组的方法
// 方法一：var args = Array.prototype.slice.call(arguments);
// 方法二：var args = [].slice.call(arguments, 0);


const toArray = function (s) {
  try {
    return Array.prototype.slice.call(s);
  } catch (e) {
    var arr = [];
    for (var i = 0, len = s.length; i < len; i++) {
      //arr.push(s[i]);
      arr[i] = s[i];  //据说这样比push快
    }
    return arr;
  }
}