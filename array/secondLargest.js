// Time Complexity : O(n)
// Space Complexity : O(1)

const findSecondLargest = (arr) => {
  let largest = Number.NEGATIVE_INFINITY,
    secondLargest = Number.NEGATIVE_INFINITY; // least value which JS can hold

  for (let num of arr) {
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest && num !== largest) {
      secondLargest = num;
    }
  }

  return secondLargest;
}

const arr = [1, 10, 5, 35, 34, 36, 34];
console.log(findSecondLargest(arr))
