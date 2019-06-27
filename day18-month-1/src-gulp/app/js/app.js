const a = () => {
  return '1'
}
a()


class baseModel {
  constructor(data, msg) {
    this.data = data;
    this.msg = msg
  }
}

new baseModel()