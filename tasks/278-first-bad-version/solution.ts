// LeetCode 278: First Bad Version
// https://leetcode.com/problems/first-bad-version/

const firstBadVersion = (n: number): number => {
  let left = 1;
  let right = n;

  while (left < right) {
    const middle = Math.floor((left + right) / 2);

    // Note: isBadVersion is a leetcode check function
    if (isBadVesrion(middle)) {
      right = middle;
    } else {
      left = middle + 1;
    }
  }

  return left;
};

// Time: O(log n)
// Space: O(1)
