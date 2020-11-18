// 防抖函数

function debounce(fn) {
  let timer = null;
  return function() {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.call(this.arguments);
    }, 1000);
  }
}

debounce(function() {
  console.log('dassad')
})