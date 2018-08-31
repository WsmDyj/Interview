// 定义一个动物类
function Animal (name) {
  // 属性
  this.name = name || 'Animal';
  // 实例方法
  this.sleep = function(){
    console.log(this.name + '正在睡觉！');
  }
}
// 原型方法
// Animal.prototype.eat = function(food) {
//   console.log(this.name + '正在吃：' + food);
// };

// // 原型链继承
// function Cat () {}
// Cat.prototype = new Animal();
// Cat.prototype.name='cat';
// var cat = new Cat()



// 构造继承

// function Cat (name) {
//   Animal.call(this);
//   this.name = name || 'Tom';
// }


// 组合继承
// function Cat (name) {
//   Animal.call(this);
//   this.name = name || 'Tom';
// }
// Cat.prototype = new Animal();
// Cat.prototype.constructor = Cat;
// var cat = new Cat() 


// 寄生组合继承，在构造继承上加一个Super函数(没有实例和方法) 让他的原型链指向父类的原型链
//  砍掉父类的实例属性，在调用两次父类的构造的时候，就不会初始化两次实例的方法/属性

function Cat (name) {
  Animal.call(this);
  this.name = name || 'Tom'
}

(function () {
  // 创建一个没有实例方法的类
  var Super = function () {}
  Super.prototype = Animal.prototype;
  // 将实例作为子类的原型
  Cat.prototype =  new Super()
})()
var cat = new Cat();
console.log(cat.name)
// console.log(cat.sleep())
