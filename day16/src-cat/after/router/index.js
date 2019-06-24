
const path = require('path')
const { SuccessModel, FailModel } = require('../model/resModel')
const { readfile } = require('../utils/util')

const handleIndexRouter = (req, res) => {
 
  const method = req.method;
  const pathname = url.parse(urlPath).pathname;
  const filePath = path.join(__dirname, '../', 'mock', 'movie.json')

  if (method === 'POST' && pathname === '/login') {

  }

  if (method === 'POST' && pathname === '/register') {

  }

  if (method === 'GET' && pathname === '/movielist') {
    let  { tabFlag } = req.query;
    console.log(tabFlag, 'tabFlag')

    return readfile(filePath).then(movieList => {
      console.log(movieList, 'movieList=========1')
       let data = JSON.parse(movieList)
      let movieArr = data.filter((item, index) => {
        return item.globalReleased === tabFlag
      })

      return new SuccessModel('movieArr')
    })
  }
}

module.exports = handleIndexRouter