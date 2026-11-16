// LeetCode 704: Binary Search
// https://leetcode.com/problems/binary-search/

const binarySearch = (numbers, target) => {
  let left = 0;
  let right = numbers.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (numbers[mid] < target) {
      left = mid + 1;
    } else if (numbers[mid] > target) {
      right = mid - 1;
    } else {
      return mid;
    }
  }

  return -1;
};

// Time: O(log n)
// Space: O(1)
