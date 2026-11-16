// LeetCode 283: Move Zeroes
// https://leetcode.com/problems/move-zeroes/

const moveZeros = (numbers) => {
  let left = 0;
  let right = 0;

  while (right < numbers.length) {
    if (numbers[right] !== 0) {
      const temp = numbers[right];
      numbers[right] = numbers[left];
      numbers[left] = temp;
      left++;
    }

    right++;
  }

  return numbers;
};

// Time: O(n)
// Space: O(1)