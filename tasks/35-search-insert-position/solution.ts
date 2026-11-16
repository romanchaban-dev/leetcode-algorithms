// LeetCode 35: Search Insert Position
// https://leetcode.com/problems/search-insert-position/

const searchInsertPosition = (
  numbers: Array<number>,
  target: number,
): number => {
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

  return left;
};

// Time: O(log n)
// Space: O(1)
