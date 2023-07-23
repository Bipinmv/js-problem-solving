const customFlat = (arr, depth = 1) => {
  let result = [];
  arr.forEach(item => {
    if (Array.isArray(item) && depth > 0) {
      result.push(...customFlat(item, depth - 1));
    } else {
      result.push(item)
    }
  })
  return result;
}

const array = [
  [1],
  [1, [2]]
];

console.log(customFlat(array));

