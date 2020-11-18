function throttle(fn, delay) {
  var timer = null,
      beginTime = new Date().getTime();

  return function() {
    const curTime = new Date().getTime(),
      args = arguments,
      self = this;
    if (timer) clearTimeout(timer);
    if (curTime - beginTime < delay) {
      timer = setTimeout(function() {
        fn.apply(self, args)
      }, delay)
    } else {
      fn.apply(self, args)
      beginTime = curTime;
    }
  }
}