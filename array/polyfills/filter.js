Array.prototype.customFilter = function (callbackFn) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (callbackFn(this[i], i, this)) result.push(this[i])
  }
  return result;
}

const nums = [1, 2, 3, 4]
console.log(nums.customFilter((val) => val > 3));