// LeetCode 1004: Max Consecutive Ones III
// https://leetcode.com/problems/max-consecutive-ones-iii/

const maxConsecutiveOnes = (numbers: Array<number>, k: number): number => {
  if (!Array.isArray(numbers))
    throw new TypeError("Parametr numbers must be an array type");

  if (Number.isNaN(k)) throw new Error("Parametr k must be a number type");

  let left = 0;
  let right = 0;

  if (numbers[left] === 0 && k === 0) {
    left++;
  }

  let currentConsecutiveLength = 0;
  let maxConsecutiveLength = 0;

  if (numbers[0] === 1 || (numbers[0] === 0 && k >= 1)) {
    maxConsecutiveLength = 1;
  }

  let zeroCount = 0;

  if (numbers[0] === 0) {
    zeroCount = 1;
  }

  while (right < numbers.length - 1) {
    currentConsecutiveLength = right - left + 1;

    if (numbers[right + 1] === 1) {
      right++;
      currentConsecutiveLength = right - left + 1;

      if (currentConsecutiveLength > maxConsecutiveLength) {
        maxConsecutiveLength = currentConsecutiveLength;
      }
    } else if (numbers[right + 1] === 0 && zeroCount < k) {
      zeroCount++;
      right++;

      currentConsecutiveLength = right - left + 1;

      if (currentConsecutiveLength > maxConsecutiveLength) {
        maxConsecutiveLength = currentConsecutiveLength;
      }
    } else {
      while (zeroCount === k) {
        if (zeroCount === 0 && k === 0) break;

        if (numbers[left] === 0) {
          zeroCount--;
        }

        left++;
      }
    }

    if (k === 0 && numbers[right + 1] === 0) {
      right++;
      left = right + 1;
    }
  }

  return maxConsecutiveLength;
};

// Time: O(n)
// Space: O(1)
