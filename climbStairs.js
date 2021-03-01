var climbStairs = function(n) {
  if (n <= 3) {
      return n;
  }
  let result1 = 1;
  let result2 = 2;
  for (let i = 2; i < n; i ++ ) {
      let temp = result1 + result2;
      result1 = result2;
      result2 = temp;
  }
  return result2;
};

const rst = climbStairs(4)