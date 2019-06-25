
const noRepeat = (arr) => {
  return arr.reduce((prev, cur) => {
       prev.indexOf(cur) === -1 && prev.push(cur)
       return prev;
  }, [])
}

module.exports = {
  noRepeat
}