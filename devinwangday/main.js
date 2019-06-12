
const noRepeat = (arr) => {
  return arr.reduce((prev, cur, index) => {

      prev.indexOf(cur) === -1 && prev.push(cur)
      console.log(prev, 'prev')
      return prev
  }, [])
}

module.exports = {
  noRepeat
}
