/** 
 * @param {class 继承}
 * 
 * */

//  Class 可以通过extends关键字实现继承，
class Point {

}

class ColorPoint extends Point {
}

class BaseModel {
  constructor(data, msg) {
    if (typeof data == 'string') {
      this.msg = data;
      data = null;
      msg = null;
    }
    if (data) {
      this.data = null;
    }
    if (msg) {
      this.msg = msg
    }
  }
}

class SuccessModel extends BaseModel {
  constructor(data, msg) {
    super (data, msg) // 执行父元素中的函数
    this.status = 0;
  }
}


class ErrorModel extends BaseModel {
  constructor(data, msg) {
    super(data, msg)
    this.status = -1;
  }
}

// class ErrorModel extends baseModel {
//   constructor(data, message) {
//     super(data, message) // 执行父元素中的函数
//     this.errno = -1;
//   }
// }


// class SuccessModel extends baseModel {
//   constructor(data, message) {
//     super(data, message) // 执行父元素中的函数
//     this.errno = 0;
//   }
// }


// class baseModel {
//   constructor(data, message) {
//     if (typeof data === 'string') {
//       this.message = data;
//       data = null;
//       message = null;
//     }
//     if (data) {
//       this.data = data
//     }
//     if (message) {
//       this.message = message
//     }
//   }
// }

