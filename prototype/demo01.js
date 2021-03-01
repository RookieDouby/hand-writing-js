// 借助构造函数实现继承
function Father() {
  this.colors = ['yellow', 'pink', 'blue']
}

function Son() {
  Father.call(this);
}

const instance = new Son();
instance.colors.push('black')
console.log(instance.colors)

const instance2 = new Father();
console.log(instance2.colors)