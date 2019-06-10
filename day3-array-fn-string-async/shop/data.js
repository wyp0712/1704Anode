var shopData = [
  {
    id: 0,
    img: './',
    title: '小米',
    price: 12,
    num:1
  },
  {
    id: 0,
    img: './',
    title: '小米',
    price: 12,
    num:2
  },
  {
    id: 0,
    img: './',
    title: '小米',
    price: '12',
    num:0
  },
  {
    id: 0,
    img: './',
    title: '小米',
    price: '12',
    num:0
  }
]


let str = shopData.map(item => {
 return `<h2>${item.title}</h2>`
}).join('')

console.log(str, 'str')





// class ShopCart {
//   constructor() {

//     this.init()
//   }

//   init() {

//     this.render()
//   }
//   render() {

//   }
//   add() {

//   }
//   remove() {

//   }

// }