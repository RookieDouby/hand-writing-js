// 寄生组合继承
function inheritPrototype(Sub, Super) {
  var subPrototype = Object.create(Super.prototype);
  subPrototype.constructor = Sub;
  Sub.prototype = subPrototype
}

function Super(name) {
  this.name = name;
}
Super.prototype.sayName = function() {
  console.log('Name: ' + this.name)
}

function Sub(name) {
  Super.call(this, name);
}

inheritPrototype(Sub, Super)

Sub.prototype.sayHello = function() {
  console.log('Hello: ' + this.name);
}

let instance1 = new Sub('Nick');
console.log(instance1.__proto__);
console.log(instance1.__proto__.__proto__);
