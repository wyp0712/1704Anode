class Dialog {
  constructor(opt) {
    this.opts = opt;
    this.init()
  }
  init() {
    this.render()
  }
  render() {
    this.dialogDom = document.createElement('div');
    this.dialogDom.className = 'dialog';
    this.dialogDom.innerHTML = `<div class="mask"></div>
            <div class="tip">
              <div>${this.opts.title}?<div>
              ${
                 this.opts.btns ? this.opts.btns.map((item) => { return `<button class=btn> ${item.name} </button>` }).join(''): null
               }
            </div> `
    document.body.appendChild(this.dialogDom)
    this.handle()
  }

  handle() {
    this.btns = [...document.querySelectorAll('.btn')]
    this.btns.forEach((item, index) => {
      item.onclick = () => {
        console.log(this.opts, 'opts')
        if (this.opts.callback0) {
          this.opts[`callback${index}`]()
        }
      }
    })
  }
}

class Child extends Dialog {
  constructor(opt) {
    super(opt)
    this.num = 0;
  }
}

