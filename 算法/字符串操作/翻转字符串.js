// 反向遍历字符串

function reverseString (str) {
 var tmp = '';
 for (var i=str.length-1;i>=0;i++) {
   tmp += str[i]
 }
 return tmp
}

reverseString('abcdfrg')

// 方法二 装转化Array操作

function reverseString(str) {
  var arr = str.split('');
  var i =0,j=arr.length-1;
  while(i<j) {
    tmp = arr[i]
  }
}