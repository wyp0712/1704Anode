/** 
 * @param {class}
 * 
*/

// 1. 通过class关键字，可以定义类。 ES6 的class可以看作只是一个语法糖，

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}

// 2.  ES6 的类，完全可以看作构造函数的另一种写法。
class Point {
  // ...
}

typeof Point // "function"
Point === Point.prototype.constructor // true

// 使用例子：
class Bar {
  doStuff() {
    console.log('stuff');
  }
}

var b = new Bar();
b.doStuff() // "stuff"

// Object.assign方法可以很方便地一次向类添加多个方法。
class Point {
  constructor(){
    // ...
  }
}

Object.assign(Point.prototype, {
  toString(){},
  toValue(){}
});

// 另外，类的内部所有定义的方法，都是不可枚举的（non-enumerable）。 这一点与 ES5 的行为不一致。
class Point {
  constructor(x, y) {
    // ...
  }

  toString() {
    // ...
  }
}

Object.keys(Point.prototype)// []

Object.getOwnPropertyNames(Point.prototype)// ["constructor","toString"]



// constructor 方法
// constructor方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。一个类必须有constructor方法，如果没有显式定义，一个空的constructor方法会被默认添加。

// constructor方法默认返回实例对象（即this），完全可以指定返回另外一个对象。
class Foo {
  constructor() {
    return Object.create(null);
  }
}

new Foo() instanceof Foo // false


// 类必须使用new调用，否则会报错。这是它跟普通构造函数的一个主要区别，后者不用new也可以执行。



// 类的所有实例共享一个原型对象。
var p1 = new Point(2,3);
var p2 = new Point(3,2);

p1.__proto__ === p2.__proto__ //true


// 取值函数（getter）和存值函数（setter）
class MyClass {
  constructor() {
    // ...
  }
  get prop() {
    return 'getter';
  }
  set prop(value) {
    console.log('setter: '+value);
  }
}

let inst = new MyClass();

inst.prop = 123; // setter: 123
inst.prop //  'getter'

// 存值函数和取值函数是设置在属性的 Descriptor 对象上的。

class CustomHTMLElement {
  constructor(element) {
    this.element = element;
  }

  get html() {
    return this.element.innerHTML;
  }

  set html(value) {
    this.element.innerHTML = value;
  }
}

var descriptor = Object.getOwnPropertyDescriptor(
  CustomHTMLElement.prototype, "html"
);

"get" in descriptor  // true
"set" in descriptor  // true


// 属性表达式
let methodName = 'getData';

class Square {
  [methodName]() {

  }
}


// Class 表达式

const myClass = class Me {

}


// this 的指向 
// 类的方法内部如果含有this，它默认指向类的实例。但是，必须非常小心，一旦单独使用该方法，很可能报错。

class Logger {
  printName(name = 'there') {
    this.print(`Hello ${name}`);
  }

  print(text) {
    console.log(text);
  }
}

const logger = new Logger();
const { printName } = logger;
printName(); // TypeError: Cannot read property 'print' of undefined
// 上面代码中，printName方法中的this，默认指向Logger类的实例。但是，如果将这个方法提取出来单独使用，this会指向该方法运行时所在的环境（由于 class 内部是严格模式，所以 this 实际指向的是undefined），从而导致找不到print方法而报错。


// 静态方法 


// 实例属性的新写法 
// 实例属性除了定义在constructor()方法里面的this上面，也可以定义在类的最顶层。

class IncreasingCounter {
  constructor() {
    this._count = 0;
  }
  get value() {
    console.log('Getting the current value!');
    return this._count;
  }
  increment() {
    this._count++;
  }
}


class IncreasingCounter { // 这个属性也可以定义在类的最顶层，其他都不变。
  _count = 0;
  get value() {
    console.log('Getting the current value!');
    return this._count;
  }
  increment() {
    this._count++;
  }
}

// 静态属性
// 静态属性指的是 Class 本身的属性，即Class.propName，而不是定义在实例对象（this）上的属性。

class Foo {
}

Foo.prop = 1;
Foo.prop // 1


// 私有方法和私有属性
// 私有方法和私有属性，是只能在类的内部访问的方法和属性，外部不能访问。这是常见需求，有利于代码的封装，但 ES6 不提供，只能通过变通方法模拟实现。




