function shallowClone(obj) {
  let result = {};

  for (let key in obj) {
    result[key] = obj[key]
  }
  return result;
}

const obj = {
  a: 111,
  b: [1, 2, 3]
}

const obj2 = shallowClone(obj)
obj2.b.push(4)

console.log(obj2);
console.log(obj);