const data = require('./stroe.json')
let list = []
data.forEach(item => {
  list.push(item.name)
})
// console.log(list)
let cityDatas = data.filter(item => {
  if(item.name === '山西省') {
    return item.city
  }
})
// console.log(cityDatas)
let cityData
data.map(item => {
  if (item.name === '山西省') {
    cityData = item.city.filter(val => {
      if (val.name === '太原') {
        return val.county
      }
    })
  }
})


console.log(cityData, 'cityData')