// LeetCode 88: Merge Sorted Array
// https://leetcode.com/problems/merge-sorted-array/

const mergeSortedArrays = (nums1, nums2, m, n) => {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (j >= 0) {
    if (j >= 0 && nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }

    k--;
  }

  return nums1;
};

// Time: O(m + n)
// Space: O(1)