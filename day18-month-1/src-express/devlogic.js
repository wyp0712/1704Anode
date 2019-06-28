
/**
 *  登陆注册
 * 
 *  some
 */

const  userData = [
  {
    "user": 'dev1',
    "pwd": 'wq'
  },
  {
    "user": 'wq',
    "pwd": 'pwd'
  },
  {
    "user": 'wq2',
    "pwd": '123'
  }
] 

let req = {}
req.body = {
  user: 'wq2',
  pwd: '123'
}

let { user, pwd } = req.body

// some的返回值是boolean
let loginStatus = userData.some(item => {
  return item.user === user && item.pwd === pwd
})

// console.log(loginStatus)
// if (loginStatus) {
//   resizeBy.end({
//     code: 0,
//     msg: 'success'
//   })
// } else {
//   resizeBy.end({
//     code: -1 ,
//     msg: 'fail'
//   })
// }


/**
 *  
 * @param {模糊搜索}
 * 
 */

// let { key }  = req.query
// const list =  movie.filter((item, index) => {
//    return item.includes(key)
//   })

//   if (list) {
//     res.end({
//       code: 0,
//       data: list
//     })
//   }

/**
 *  
 * @param { 分页 }
 * 
 */

//  let  { page, size } = req.query
       page = page * 1
       size = size * 1

 let pageData = movie.filter((item, index) =>  index >= page * size && index < (page + 1) * size  )

/**
 *  
 * @param { 增删改查 }
 * 
 */

//  let { id, content } = req.body

// movie.push({})

// let data = movie.filter(item => {
//   return item.id != id
// })

// movie.map(item => {
//   if(item.id === id) {
//     item.name = content
//   }
// })



















