// LeetCode 209: Minimum Size Subarray Sum
// https://leetcode.com/problems/minimum-size-subarray-sum/

const minSizeOfSubarraySum = (numbers, target) => {
  let left = 0;
  let right = 0;
  let sum = 0;
  let minLength = Infinity;

  while (right < numbers.length) {
    sum += numbers[right];

    while (sum >= target) {
      if (right - left + 1 < minLength) {
        minLength = right - left + 1;
      }

      sum -= numbers[left];
      left++;
    }
    right++;
  }

  return minLength === Infinity ? 0 : minLength;
};

// Time: O(n)
// Space: O(1)