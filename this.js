// 作为对象的方法调用
// 作为普通函数调用
// 构造器调用
// Function.prototype.call 和 Function.prototype.apply 调用

// 1.当函数作为对象的方法被调用时，this指向该对象
var obj = {
    a: 1,
    getA : function() {
        console.log(this === obj);
        console.log(this.a)
    }
}
obj.getA();

// 2.