Array.prototype.customMap = function (callbackFn) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callbackFn(this[i], i, this))
  }
  return result;
}

const nums = [1, 2, 3, 4]
console.log(nums.customMap((val) => val + 1));