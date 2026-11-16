// LeetCode 26: Remove Duplicates from Sorted Array
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

const removeDuplicatesFromSortedArray = (numbers) => {
  let k = 1;

  let left = 0;
  let right = 1;

  while (right < numbers.length) {
    if (numbers[left] !== numbers[right]) {
      const temp = numbers[right];
      numbers[left + 1] = temp;

      k++;
      left++;
    }

    right++;
  }

  return k;
};

// Time: O(n)
// Space: O(1)