/**
 * 
 * class: class
 * 
 * ES6 提供了更接近传统语言的写法，引入了 Class（类）这个概念，作为对象的模板。通过class关键字，可以定义类。
 * ES6 的class可以看作只是一个语法糖，它的绝大部分功能，ES5 都可以做到
 * 
 * 类的内部所有定义的方法，都是不可枚举的
 * 
 * constructor方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。一个类必须有constructor方法，如果没有显式定义，一个空的constructor方法会被默认添加。
 * constructor方法默认返回实例对象（即this），完全可以指定返回另外一个对象。
 * 
 * 类必须使用new调用，否则会报错。这是它跟普通构造函数的一个主要区别，后者不用new也可以执行。
 * 
 */

// class Point {
//   //构造方法
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }

//   toString() {
//     return '(' + this.x + ', ' + this.y + ')';
//   }
// }


// class Base {

// }

// Object.assign(Base.prototype, {
//   toString(){},
//   toValue(){}
// })

// console.log(Base.prototype, 'Base')


// class Foo {
//   constructor() {
//     return Object.create(null);
//   }
// }

// new Foo() instanceof Foo


// 与 ES5 一样，类的所有实例共享一个原型对象。
// var p1 = new Point(2,3);
// var p2 = new Point(3,2);

// p1.__proto__ === p2.__proto__
//true


class Point {
  get prop () {
    return 'hello world'
  }
  set prop(val) {
    console.log('val:'+ val)
  }
}

 let inst = new Point()
 inst.prop = '假期已过'
 console.log(inst.prop, 'prop')


 class DomInner {
   constructor(el) {
     this.el = el;
   }

   get html() {
     return this.el.innerHTML
   }

   set html(val) {
     this.el.innerHTML = val;
   }
 }

 new DomInner()


 const myClass = class Me {
   init() {
    //  console.log('hello world init')
     return 'hello world init'
   }
 }

 let p1 = new myClass()

 console.log(p1.init())

 