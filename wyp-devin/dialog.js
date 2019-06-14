
/**
 * @function 【 Diolog  】
 * 
 * @param { 确定 取消 title  content 回调函数 }
 */
class Dialog {
  constructor(opt) {
    this.opts = opt
    console.log(this.opts)
    this.render()
  }
  render() {
    document.body.innerHTML = `
          <div class="dialog">
          <div class="mask"></div>
          <div class="tip">
             <h1> ${this.opts.title} </h1>
             ${
      this.opts.btns ? this.opts.btns.map(item => { return `<button>${item.name} </button>` }).join('') : null
      }
          </div>
        </div>
    `
    this.dialogBtn()
  }

  dialogBtn() {
    const btns = [...document.querySelectorAll('button')];
    btns.forEach((item, index) => {
      item.onclick = () => {

        switch (index) {
          case 0:
            this.opts.success && this.opts.success()
            break;
          case 1:
            this.opts.error && this.opts.error()
            break;
        }
      }
    })
  }
}

class childDiolog extends Dialog {
  constructor(opt) {
    super(opt)
    this.msg = '我是继承的子函数'
  }
}
