

let a = () => {
  console.log(this)
}

a()

console.log(global.process.title)
console.log(global.process.version)