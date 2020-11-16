/**
 * @name JsliangPromise
 * @description 手写 Promise
 */

const PENDIND = 'pending';
const RESOLVED = 'resolved';
const REJECTED = 'rejected';

function MyPromise(fn) {
  const that = this;
  that.status = PENDIND;
  that.value = null;
  that.reason = null;

  that.resolvedCallbacks = [];
  that.rejectedCallbacks = [];

  function resolve(value) {
    // if (that.status =)
  }

  try {
    fn(resolve, reject)
  } catch(e) {
    reject(e);
  }
}