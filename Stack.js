//栈  先进先出 
function Stack() {
    var items = [];
    this.push = function(element) {  //添加一个(或几个)新元素到栈顶
        items.push(element);
    } 
    this.pop = function() { //移除栈顶元素，同时返回被删除的元素
        return items.pop();
    }
    this.peek = function() {   //返回栈顶元素，不对栈做任何修改
        return items[items.length-1] 
    }
    this.isEmpty = function() {  //如果栈里没有任何元素就返回true
        return items.length == 0;
    }
    this.clear = function() {   //移除栈里的所有元素
        return items =[];
    }
    this.size = function() {  //返回栈里的元素个数
        return items.length;
    }
    this.print = function() {
        console.log(items.toString());
    }
}
// 使用Stack类
 var stack = new Stack();
 console.log(stack.isEmpty());
 stack.push(5);
 stack.push(8);
console.log(stack.peek());
console.log(stack.isEmpty())

//栈的运用
//  1. 从十进制到二进制   十进制数字和二进制整除（二进制满二进一），知道结果为0
function divideBy2(decNumber) {
    var remStack = new Stack(),
        rem,
        binaryString = '';
    while(decNumber > 0) {
        rem = Math.floor(decNumber % 2);
        remStack.push(rem);
        decNumber = Math.floor(decNumber/2);
    }
    while(!remStack.isEmpty()) {
        binaryString += remStack.pop().toString();
    }
    return binaryString;
}
console.log(divideBy2(233))

// 十进制转换成任意进制的基数为参数
function baseConverter (decNumber,base) {
    var remStack = new Stack(),
        rem,
        baseString = '',
        digits = '0123456789ABCDEF';
    while (decNumber > 0) {
        rem = Math.floor(decNumber % base);
        remStack.push(rem);
        decNumber = Math.floor(decNumber /base);
    }
    while (!remStack.isEmpty()){
        baseString += digits[remStack.pop()];
    }
    return baseString;
}
console.log(baseConverter(100345,2))
