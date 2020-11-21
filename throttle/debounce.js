function debounce(fn, delay, triggerNow) {
  let timer = null;

  return function() {
    let self = this,
        args = arguments;

    clearTimeout(timer);
    if (triggerNow) {
      const isExec = !timer;

      timer = setTimeout(() => {
        timer = null
      }, delay)

      if (isExec) {
        fn.apply(self, args)
      }
    } else {
      timer = setTimeout(() => {
        fn.apply(self, args)
      }, delay)
    }
  }
}