class baseModel {
  constructor(data, msg) {
    if (typeof data === 'string') {
      this.msg = data
      data = null;
      msg = null;
    }
    if (data) {
      this.data = data;
    }
    if (msg) {
      this.msg = msg
    }
  }
}

// 成功提示
class SuccessModel extends baseModel {
  constructor(data, msg) {
    super(data, msg)
    this.code = 0
  }
}

// 失败提示
class FailModel extends baseModel {
  constructor(data, msg) {
    super(data, msg)
    this.code = -1
  }
}

module.exports = {
  SuccessModel,
  FailModel
}


