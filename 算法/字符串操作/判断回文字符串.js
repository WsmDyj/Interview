// 思路  递归

// 方法一: 字符串分隔，倒转，聚合
// function palindrome (line) {
//   line += '';
//   return line === line.split('').reverse().join('')
// }


// 方法二： 字符串头部和尾部，逐次向中间检测
function isPalindrome (line) {
  line += '';
  for (var i=0,j=line.length-1;i<j;i++,j--) {
    if (line.chartAt(i) !== line.chartAt(j)) {
      return false
    }
  }
  return true
// }

// 方法三 递归
// slice 复制，从slice（start，end)
  // function palindrome (str) {
  //   var re = /[\W_]/g    // \W匹配任何非单词字符串，等价于[^A-Za-Z0-9]
    
  //   var lowRegStr = str.toLowerCase().replace(re,'')

  //   if(lowRegStr.length ===0) {
  //     console.log(str + 'is palndrome')
  //     return  true
  //   }

  //  8
      
  //     console.log(str+'is not palndrome')
  //     return false
  //   }
  //   return palindrome(lowRegStr.slice(1,lowRegStr.length-1))
  // }

  palindrome('abcba')