const a = () => {
  return 1;
}
a()

class baseModel{
  constructor(data, msg) {
    this.data = data
    this.msg = msg
  }
}


class success extends baseModel {
  constructor(data, msg) {
    super(data, msg)
  }
}

const p = new success({'hell': "world"})

