
// 不使用call、apply、bind，如何用js实现call或者apply功能

// call() 方法在使用一个指定的this值和若干个指定的参数值的前提下条用某个函数或方法

var foo = {
    value: 1
}
function bar() {
    console.log(this.value)
}
bar.call(foo)

// call 改变了this的指向，指向foo
// bar 函数执行了

var foo = {
    value: 1,
    bar : function() {
        console.log(this.value)
    }
}
foo.bar();

// 1.将函数设为对象的属性
// 2.执行该函数
// 3.删除该函数

Function.prototype.call2 = function(context) {
    context.fn = this;
    context.fn();
    delete context.fn;
}
var foo = {
    value: 1
}
function bar () {
    console.log(this.value)
}

bar.call2(foo)

// call函数还能给定参数执行函数
var foo = {
    value: 1
}
function bar(name,age) {
    console.log(name)
    console.log(age)
    console.log(this.value)
}
bar.call(foo,'kevin',18);

arguments = {
    0:foo,
    1:'kevin',
    2:18,
    length: 3
}
var args = [];
for (var i=0;i<arguments.length;i++){
    args.push('arguments['+i+']');
}