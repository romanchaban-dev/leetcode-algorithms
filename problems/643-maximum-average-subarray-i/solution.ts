// LeetCode 643: Maximum Average Subarray I
// https://leetcode.com/problems/maximum-average-subarray-i/

const sllibingWindow = (numbers: Array<number>, k: number): number => {
  let left = 0;
  let right = k - 1;

  let currSum = 0;
  let maxSum = 0;

  currSum = numbers.slice(0, k).reduce((acc, number) => {
    return acc + number;
  }, 0);

  maxSum = currSum;

  while (right < numbers.length - 1) {
    currSum = currSum - numbers[left] + numbers[right + 1];
    left++;
    right++;

    if (currSum > maxSum) {
      maxSum = currSum;
    }
  }

  return maxSum / k;
};

// Time: O(n)
// Space: O(k) for the initial slice
