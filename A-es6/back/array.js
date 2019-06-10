/**
 * @param {Array 数组}
 * 
 */

/**
 *  @param {es5 数组}
 *   
 *  push  sort pop unshift shift  slice  
 *  
 *  forEach  map filter some every
 * 
 *  join  concat  reverse
 *  
 *  indexOf  isArray
 * */


 /**
  * @param {es6 数组}
  * 
  * Array.from()
  * ...运算符
  * find 返回第一个符合条件的内容，找不到返回undefined 
  * findIndex 返回第一个符合条件的内容所在的下标 找不到返回-1
  * 
  * Array.of(内容) 将内容拼成数组
  * flat(维度) 将多维数组扁平化
  * 
  * copyWithin 用什么覆盖到哪里
  * array.fill(value, start, end) 开始填充位置，结束填充位置
  * 
  */

  let arr = [1,2,3,4,5];
  arr.copyWithin(0,2,4);
  console.log(arr, 'arr')

  let brr = ['hello', 'world', 'zhongguo', '1','2','3','4','5','6'];
  brr.fill('devin', 1, 6);
  console.log(brr, 'brr')