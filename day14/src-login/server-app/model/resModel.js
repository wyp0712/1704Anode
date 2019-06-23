/**
 * @param { 返回数据模型 包括成功和失败 }
 */
class baseModel{
  constructor (data, msg){
    if (typeof data === 'string') {
      this.msg = data;
      data = null;
      msg = null
    }
    if (data) {
      this.data = data;
    }
    if (msg) {
      this.msg = msg
    }
  }
}

class SuccessModel extends baseModel {
  constructor(data, msg) {
    super(data, msg)
    this.code = 0;
  }
}

class FailModel extends baseModel {
  constructor(data, msg) {
    super(data, msg)
    this.code = -1;
  }
}

module.exports = {
  SuccessModel,
  FailModel
}

