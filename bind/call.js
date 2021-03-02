// 自己实现call方法
Function.prototype.myCall = function(context) {
  context = context || window;
  context.say = this;
  context.say();

}

const Person = {
  name: 'Tom',
  say: function() {
    console.log(this.name)
  }
}

const person1 = {
  name: 'Nick'
}
Person.say.myCall(person1)
