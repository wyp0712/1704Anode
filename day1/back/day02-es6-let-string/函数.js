// es6 函数
// let arr = JSON.parse(localStorage.getItem('arr')) || [];
function fn(a=1,b=2) {
    // console.log(a,b)
    // a = a || 1; // 短路表达式
    // b = b || 2;
    console.log(a,b)
}
fn(3,4)

// 箭头函数

// let fun = (a,b) => {
//     console.log(1)
// }
// fun(1,2)
// 箭头函数this指向声明的时候，普通函数指向调用的时候
let obj = {
    count: 10,
    set() {
        function es5() {
            console.log(this) // window
            console.log(this.count) // und
        }
        let es6 = () => {
            console.log(this) // 
            console.log(this.count) //10
        }
        es5()
        es6()
    }
    
}
obj.set()

// reset参数,注意，reset参数后不可以再有其他参数
function add(arr, ...abc) {
    console.log(arr)
    console.log(abc)
    // console.log(arguments) // 获取所有参数
}
add([],"abc",2,3)