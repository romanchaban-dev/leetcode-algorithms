// LeetCode 1343: Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold
// https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/

const numOfSubarrays = (
  arr: Array<number>,
  k: number,
  threshold: number,
): number => {
  let left = 0;
  let right = k - 1;
  let arithmeticMeanCount = 0;

  let currentAverage = arr.slice(left, right + 1).reduce((acc, number) => {
    return acc + number;
  }, 0);

  if (currentAverage / k >= threshold) {
    arithmeticMeanCount++;
  }

  while (right < arr.length - 1) {
    currentAverage = currentAverage - arr[left] + arr[right + 1];

    if (currentAverage / k >= threshold) {
      arithmeticMeanCount++;
    }

    left++;
    right++;
  }

  return arithmeticMeanCount;
};

// Time: O(n)
// Space: O(k) for the initial slice
