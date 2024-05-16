Array.prototype.customReduce = function (callbackFn, initialValue) {
  let result = initialValue;
  for (let i = 0; i < this.length; i++) {
    result = result ? callbackFn(result, this[i], i, this) : this[i];
  }
  return result;
}

const nums = [1, 2, 3, 4]
console.log(nums.customReduce((acc, curr) => acc + curr, 2));
