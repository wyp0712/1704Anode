/**
 * 
 * 
 */

const arr = ['hello world', '黑'];
//  var resArr = arr.filter((item, index) => {
//      if (item.includes('黑')) {
//        return item
//      }
//  })
//  console.log(resArr, 'resArr');

var s = arr.map(item => {
  if (item.includes('h')) {
    return item;
  }
}).join("");

console.log(s, 's')
 













 

