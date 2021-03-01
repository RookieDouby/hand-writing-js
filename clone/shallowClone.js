function shallowClone(obj) {
  let result = {};

  for (let key in obj) {
    result[key] = obj[key]
  }
  return result;
}