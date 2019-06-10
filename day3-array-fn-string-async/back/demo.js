/**
 * 
 * @param { some every filter }
 * ### 登录
// some  数组里只要有一个满足条件即为true
filter  在数组里筛选出符合条件的项，然后组成一个新数组

filter 返回新数组
some 返回boolean
every 返回boolean

 */

const userData = {
  user: 'devin',
  pwd: 123
}

const listData = [
  {
    user: '1',
    pwd: 123
  },
  {
    user: 'wyp',
    pwd: 123
  },
  {
    user: 'wyp2',
    pwd: 123
  }
]

let flag = listData.some((item) => {
    return item.user === userData.user
})

if (!flag) {
  listData.push({
    user: userData.user,
    pwd: userData.pwd
  })
}

// console.log(flag, 'flag')
// console.log(listData, 'listData')


/** 
 * 
 * 
*/

const arr = [1,2,3,4,5,555,5,5,5,5,5];

let brr = arr.filter((item,index) => {
  // return item > 3
  // return item.includes('d')
})
console.log(brr, 'brr')

// filter


/** 
 *   every boolean
 * 
 * */ 






