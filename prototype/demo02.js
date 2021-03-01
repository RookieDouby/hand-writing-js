// 组合继承
function Father(name) {
  this.name = name;
  this.colors = ['red', 'yellow', 'blue'];
}
Father.prototype.sayName = function() {
  console.log('Name: ' + this.name)
}

function Son(name, age) {
  Father.call(this, name);
  this.age = age
}
Son.prototype = new Father();
Son.prototype.sayAge = function() {
  console.log(this.age)
}

const sonInstance1 = new Son('Jack', 23);
sonInstance1.colors.push('black')
console.log(sonInstance1.colors)
sonInstance1.sayName();
sonInstance1.sayAge();

const sonInstance2 = new Son('Lily', 25);
console.log(sonInstance2.colors);
sonInstance2.sayName();
sonInstance2.sayAge();