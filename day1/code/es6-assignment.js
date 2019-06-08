/** 
 * @param { 解构 赋值 }
 * 
 *  数组的解构赋值
 * 
 *  对象的解构赋值
 * 
 *  对象中必须用key一样的名字，
 * 
*/

// var arr = [ 'a', 'b', 'c' ];

// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])

// const [m, n, d] = ['a', 'b']
// const [[a,c], b] = [ ['hello', 'world'], '上海滩'];
// // console.log(m, n, d)
// console.log(a, c)


const arr = {
  user: '王琪',
  password: '54321'
}

// console.log(arr.password, 'pwd-w')


const { user, password } = {
  user: '王琪',
  password: '54321'
}
// console.log(user, 'object---{}')

function auto() {

}


module.exports = {
  user,
  password,
  auto,
  
}