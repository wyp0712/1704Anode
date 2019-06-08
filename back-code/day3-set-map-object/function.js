/** 
 * @param {函数 rest参数}
 * 
 * 
*/

function add(...val) {
  console.log(val, 'val')
  for(var v of val) {
    console.log(v, 'v')
    console.log(val, 'val')
  }
}

add(1,2,3,4,5,6,7)



const sortNum = (...num) => num.sort();