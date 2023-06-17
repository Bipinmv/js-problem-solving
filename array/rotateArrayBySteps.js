// Time Complexity : O(n)
// Space Complexity : O(1)

const rotateArray = (arr, steps) => {
  let size = arr.length;
  if (steps > size) {
    size = steps % size;
  }

  const splicedItems = arr.splice(size - steps, steps);
  return [...splicedItems, ...arr];
}

const arr = [1, 2, 3, 4, 5, 1];
console.log(rotateArray(arr, 5))
