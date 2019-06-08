/**
 *  Set
 *  类似数组，成员唯一.
 *  Set本身是一个构造函数，用来生成 Set 数据结构。
 *  Set函数可以接受一个数组（或者具有 iterable 接口的其他数据结构）作为参数，
 *  不会发生类型转换，所以5和"5"是两个不同的值
 *  在 Set 内部，两个NaN是相等。两个对象总是不相等的。
 *  Array.from方法可以将 Set 结构转为数组。 [...]
 * 
 *  Set的遍历顺序就是插入顺序。这个特性有时非常有用，比如使用 Set 保存一个回调函数列表，调用时就能保证按照添加顺序调用。
 * 
 * 
 *  
 * 
 *  Set 方法： 两类：
 *  1.操作方法 
 *      add(value)：添加某个值，返回 Set 结构本身。
        delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
        has(value)：返回一个布尔值，表示该值是否为Set的成员。
        clear()：清除所有成员，没有返回值。
 *      
 *  2.遍历方法
        keys()：返回键名的遍历器
        values()：返回键值的遍历器
        entries()：返回键值对的遍历器
        forEach()：使用回调函数遍历每个成员
 *  
        数组的map和filter方法也可以间接用于 Set 了。
 *  
 *  
 * 
 * 
 * 
 *  Map：
 * 
 *   JavaScript 的对象（Object），本质上是键值对的集合（Hash 结构），
 *  但是传统上只能用字符串当作键。这给它的使用带来了很大的限制。
 * 
 * 
 *  Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应，是一种更完善的 Hash 结构实现。
 * 
 */


function strMapToJson(strMap) {
  return JSON.stringify(strMapToObj(strMap));
}

let myMap = new Map().set('yes', true).set('no', false);
console.log(myMap)
// '{"yes":true,"no":false}'


let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);

// 并集
let union = new Set([...a, ...b]);
// Set {1, 2, 3, 4}

// 交集
let intersect = new Set([...a].filter(x => b.has(x)));
// set {2, 3}

// 差集
let difference = new Set([...a].filter(x => !b.has(x)));
// Set {1}


let set = new Set(['red', 'green', 'blue']);
for (let item of set.entries()) { // 返回键值和键名
  console.log(item);
}


 // 去除数组的重复成员
// [...new Set(array)]
// 去除字符串里面的重复字符。

[...new Set('ababbc')].join('')

const s = new Set();

[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));

for (let i of s) {
  console.log(i);
}



















































/** 
 *  
 * Set 里面的内容不会重复（数组去重）
 * 
 * Set是一个构造函数，可以通过new 的方式创走一个实例；这个实例可以调用Set.prototype 上面的方法和属性
 * add() => 给实例添加意向，重复内容添加无效，返回值是添加之后的新的set解构
 * delete() => 删除实例中的某一项，返回值是boolean,删除失败返回false
 *  
 * clear() => 删除实例中的所有项目，修改原实例
 * has() => 判断实例中有没有某一项，返回值是boolean
 * 
 * size => 返回实例中项目的长度
 * 
 * keys()  values()  entries()  使用for...of 去遍历
 * 
 * 
 * */