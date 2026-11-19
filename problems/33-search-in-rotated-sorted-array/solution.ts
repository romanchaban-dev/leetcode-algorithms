// LeetCode 33: Search in Rotated Sorted Array
// https://leetcode.com/problems/search-in-rotated-sorted-array/

const search = (numbers: Array<number>, target: number): number => {
  let left = 0;
  let right = numbers.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (numbers[middle] === target) {
      return middle;
    }

    if (numbers[left] <= numbers[middle]) {
      if (numbers[left] <= target && target < numbers[middle]) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    } else {
      if (numbers[middle] <= target && target <= numbers[right]) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
  }

  return -1;
};

// Time: O(log n)
// Space: O(1)
