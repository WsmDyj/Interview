// 数组去重
var arr = [1, 5, 8, 1, 3, 5],
  len = arr.length;
// 方法一 indexOf去重一
// 数组的indexOf()方法可返回某个指定的元素在数组中首次出现的位置，没有就返回-1，该方法首先定义一个空数组res,
// 然后调用indexOf方法对原来的数组进行遍历判断，如果不在res中，则将其push到res中，最后将res返回即可获得去重的数组

// function unique(arr) {
//   if (!Array.isArray(arr)) {
//     console.log('type error!')
//     return
//   }
//   let res = [];
//   for (let i = 0; i < len; i++) {
//     if (res.indexOf(arr[i]) === -1) {
//       res.push(arr[i])
//     }
//   }
//   return res
// }

// 方法二、indexOf去重二
// 利用indexOf检查元素在数组中第一次出现的位置是否和元素现在的位置相等，如果不等则说明该元素是重复的
// function unique (arr) {
//   if (!Array.isArray(arr)) {
//     console.log('type error!')
//     return 
//   }
//   return Array.prototype.filter.call(arr, (item, index) => {
//     return arr.indexOf(item) === index;
//   })
// }

// 方法三、相邻元素去重
// 这种方法首先调用了数组的排序方法sort(),然后根据排序后的结果进行遍历及相邻元素对比，如果相同就跳过该元素
// function unique (arr) {
//   if (!Array.isArray(arr)) {
//     console.log('type error')
//     return
//   }
//   arr = arr.sort()
//   let res = [];
//   for (let i = 0; i < len; i++) {
//     if (arr[i] !== arr [i-1]) {
//       res.push(arr[i])
//     }
//   }
//   return res
// }

// 方法四、set与结构赋值去重
// ES6新增了数据类型set，set的一个最大的有点就是数据不重复，set函数可以接受一个数组（或类数组对象）最为参数初始化
// function unique (arr) {
//   if (!Array.isArray(arr)) {
//     console.log('type erroe')
//     return 
//   }
//   return [...new Set(arr)]
// } 

// 方法四、Array.from 与 Set 
// Array.from方法可以将Set结构转换为数组的结果
// function unique (arr) {
//   return Array.from(new Set(arr))
// }

// 方法五、双重循环
// 先定义一个包含元素数组第一个元素的数组，然后遍历元素数组，将原始数组中的每一个元素与新数组中的每一个元素对比
// ，如果重复则添加到新数组中，然后返回新数组，时间复杂度O(n ^2)

function unique (arr) {
  if (!Array.isArray(arr)) {
    console.log('type error');
    return 
  }
  let res = [arr[0]];
  for (let i = 0; i < len; i++) {
    let flag = true;
    for (let j = 0; j < res.length; j++) {
      if (arr[i] === res[j]) {
        flag = false;
        break
      }
    }
    if (flag) {
      res.push(arr[i])
    }
  }
  return res
}



console.log(unique(arr))
