// 浅拷贝和深拷贝

// 如果是数组，可以利用该数组的一些方法，比如：slice、concat返回一个新数组来实现拷贝

var arr = ['old',1,true,null,undefined];
var new_arr = arr.concat();  //concat() 方法用于连接两个或多个数组
// var new_arr = arr.slice(); slice() 方法可从已有的数组中返回选定的元素
new_arr[0] = 'new';
console.log(arr);
console.log(new_arr);


// 数组里嵌套了对象或者数组
var arr = [{old:'old'},['old']];
var new_arr = arr.concat();
arr[0].old = 'new';
arr[1][0] = 'new';
console.log(arr);
console.log(new_arr);

// concat 方法，克隆的并不彻底。

var arr = ['old',1,true, ['old1','old2'],{old:1}];
// JSON.parse() 方法用于将一个 JSON 字符串转换为对象。
// JSON.stringify() 方法用于将 JavaScript 值转换为 JSON 字符串。
var new_arr = JSON.parse(JSON.stringify(arr));
console.log(new_arr)

// 不能拷贝函数
var arr = [function(){console.log('a'),{b:function(){console.log('b')}}}]
var new_arr = JSON.parse(JSON.stringify(arr));
console.log(new_arr)  //null


// 比那里对象，然后把属性和值都放在一个新的对象
var shallowCopy =  function(obj) {
    if(typeof obj !== 'object') return ;
    var newObj = obj instanceof arr ? [] : {};
    for  (var key in obj) {
        if(obj.hasOwnProrerty(key)){
            newObj[key] = obj[key];
        }
    }
    return newObj
}


//深拷贝的实现

// 判断属性值的类型，如果是对象，我们递归调用深拷贝函数

var deepCopy = function(obj) {
    if(typeof obj !== 'object') return;
    var newObj = obj instanceof Array ?[]:{};
    for(var key in obj) {
        if(obj.hasOwnProrerty(key)) {
            newObj = typeof obj[key] === 'object'?deepCopy(obj[key]):obj[key];
        }
    }
    return newObj;
}