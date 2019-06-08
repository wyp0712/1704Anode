// 数组API 
// es5  push sort pop unshift shift slice splice forEach map filter every some join concat reverse indexof isArray 
// let arr = [1,2,3];
// let len = arr.push(4); // 4
// console.log(arr) // 会修改原数组

// arr.sort(function (a,b) {
//     return b-a;
// })
// console.log(arr)

// let newArr = arr.slice(1,3); // 含头不含尾
// console.log(newArr)

// splice  增删改   [4,3,2,1]
// let spliceArr = arr.splice(3, 0, 0) // []
// console.log(arr)

// let spliceArr = arr.splice(2,1) // [2]

// arr.splice(0,1,5) // [4]
// console.log(arr)

let movies = [
    {
        name: "妇联4",
        isShow: true
    },
    {
        name: "老师好",
        isShow: false
    },
    {
        name: "比悲伤更悲伤的故事",
        isShow: true
    }
];
// let isShowArr = movies.filter(function(item) {
//     return item.isShow
// })
// console.log(isShowArr)

// let isHas = movies.some(item => {
//     return item.isShow
// })
// // console.log(isHas)
// let isEvery = movies.every(item => {
//     return item.isShow
// })
// console.log(isEvery)

// es6
// Array.from()
// ...运算符
// find返回第一个符合条件的内容，找不到返回undefined findIndex 返回第一个符合条件的内容所在下标找不到返回-1
// Array.of(内容) 将内容拼成数组
// flat(维度) 将多维数组扁平化 
// let lis = Array.from(document.querySelectorAll('li'))
// let lis = [...document.querySelectorAll('li')]

// let arr = [1,2,3,4,5];
// let num = arr.find(function(item) {
//     return item>5
// })
// console.log(num) //4
// let i = arr.findIndex(function(item) {
//     return item>5
// })
// console.log(i) // 3


// var str = -0;//0 -0 "" undefined null NaN
// // var a = 1;var b=1
// if(1) {
//     console.log(2)
// }


// copyWithin   用什么覆盖到哪里
         //3,4,5
// let arr = [1,2,3,4,5];
// arr.copyWithin(0,2,4);  // 34345
// console.log(arr) // [3,2,3,4,5]   [3,4,5,4,5]

// fill 填充
let arr = [1,2,3];
arr.fill("hello", 1,2);
console.log(arr)