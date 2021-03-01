Function.prototype.myBind = function(thisArg) {
  if (typeof thisArg !== 'function') {
    return;
  }
  const _self = this;
  const args = Array.prototype.slice.call(arguments, 1);
  return function() {
    return _self.apply(thisArg, args.concat(Array.prototype.slice.call(arguments)))
  }
}