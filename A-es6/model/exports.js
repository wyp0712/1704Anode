/**
 * module.exports   module.exports = ？？？, 如果多次调用，会后面的覆盖前面的，但是我们又想同时抛出多个值,module.exports = {将你需要抛出的值放在这个对象内}
 * exports   exports.变量名 = 值，可以多次调用   就是指向module.exports
 * 如果同时调用module.exports和exports，他会抛出的是module.exports
 */
// let a = 1;
// let b = [1,2,3];
// let c = {name: 'lili'};
// let d = function() {
//     console.log(1)
// }
// module.exports = {
//     a:a,
//     b:b,
//     c,
//     d
// }
// let a = 1;
// let b = 2;
// // console.log(exports)
// exports.a = a  // {a:1}
// exports.b = b // {a:1, b:2}
// console.log(module.exports)  // {}
// console.log(exports) // {}
// console.log(module.exports === exports) // 他们俩指向同一地址

// let a = {
//     name: 'lili'
// }
// let b = 2;
// exports.b = b
// // console.log(module.exports)  // {}
// module.exports = a; //a
// // console.log(exports) // {}

let a = {
    name: 'lili'
}
// module.exports = a;
exports.a = a;