/**
 * @name JsliangPromise
 * @description 手写 Promise
 */

const PENDING = 'pending';
const RESOLVED = 'resolved';
const REJECTED = 'rejected';

function myPromise(fn) {
  const that = this;
  that.status = PENDING;
  that.value = null;
  that.reason = null;
  that.resolvedCallbacks = [];
  that.rejectedCallbacks = []

  function resolve(value) {
    if (that.status === PENDING) {
      that.status = RESOLVED;
      that.value = value;
      that.resolvedCallbacks.map(cb => cb(value))
    }
  }

  function reject(reason) {
    if (that.status === PENDING) {
      that.status = REJECTED;
      that.reason = reason;
      that.rejectedCallbacks.map(cb => cb(reason))
    }
  }

  try {
    fn(resolve, reject)
  } catch(e) {
    reject(e)
  }
}

myPromise.prototype.then = function(onFullfilled, onRejected) {
  const that = this;
  
  if (that.status === PENDING) {
    that.resolvedCallbacks.push(onFullfilled);
    that.rejectedCallbacks.push(onRejected);
  }

  if (that.status === RESOLVED) {
    onFullfilled(that.value)
  }

  if (that.status === REJECTED) {
    onRejected(that.reason);
  }

  return that;
}

const promise = new myPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(1000)
  }, 1000)
})

promise.then((res) => {
  console.log(res)
})