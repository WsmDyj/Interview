// 找出字符串里出现最多的一次

// 1. 准备一个空的json, 通过循环字符串的每一个字符来看，如果json里没有这个字符，就在json里创建一个新的数组，并把这个字符放进数组中，如果
//   json里这个字符串，继续把字符串添加进数组里，这时循环json里有n个数组
// 2.找出json长度最长的数组，此时长度即个数，而最多的字符就是这个参数，用到for in 

var str="sssfgtdfssddfsssfssss";
function max () {
  var json = {};
  var num =0;
  var value = null;
  for (var i=0;i<str.length;i++) {
    var k = str[i]
    if (!json[k]) {
      json[k] = [];
    }
    json[k].push(k)
  }

  for (var attr in json) {
    if (num<json[attr].length) {
      num = json[attr].length;
      value = json[attr][0]
    }
  }
  console.log("出现最多的字符串是:"+value+',出现次数是'+num)
}
max(str)