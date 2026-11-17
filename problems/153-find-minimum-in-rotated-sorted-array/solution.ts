// LeetCode 153: Find Minimum in Rotated Sorted Array
// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array

const findMin = (numbers: Array<number>): number => {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    if (numbers[left] < numbers[right]) {
      return numbers[left];
    }

    const mid = Math.floor((left + right) / 2);

    if (numbers[mid] < numbers[right]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return numbers[left];
};

// Time: O(log n)
// Space: O(1)
