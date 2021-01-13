// 求和

// 求序列
// 1 / 1*3 + 1 / 5 * 7 + 1/ 9 * 11

function sum_HOF(a, b, next, term) {
  let res;
  if (a > b) {
    res = 0;
  } else {
    res = term(a) + sum_HOF(next(a), b, next, term)
  }
  return res;
}

const termFn = num => 1 / (num * (num + 2))
const nextFn = num => num + 4;

const result = sum_HOF(1, 7, nextFn, termFn)
console.log(result)