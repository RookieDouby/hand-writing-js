function deepClone(obj) {
  if (typeof obj === 'object') {
    var result = obj.constructor === Array ? [] : {};

    for (let i in obj) {
      result[i] = typeof obj[i] === 'object' ? deepClone(obj[i]) : obj[i]
    }
  } else {
    var result = obj;
  }

  return result;
}

const initialObj = {
  name: 'Nick',
  projects: ['math', 'chinese']
}

const newObj = deepClone(initialObj)
newObj.projects.push('art')
console.log(newObj)
console.log(initialObj)