// LeetCode 125: Valid Palindrome
// https://leetcode.com/problems/valid-palindrome/

const isPalindrome = (string) => {
  if (typeof string !== "string")
    throw new TypeError("Parametr string must be string");

  let left = 0;
  let right = string.length - 1;

  while (left < right) {
    const isValidLeft = /[a-z0-9]/i.test(string[left]);
    const isValidRight = /[a-z0-9]/i.test(string[right]);

    if (!isValidLeft) {
      left++;
    } else if (!isValidRight) {
      right--;
    } else if (string[left].toLowerCase() !== string[right].toLowerCase()) {
      return false;
    } else {
      left++;
      right--;
    }
  }

  return true;
};

// Time: O(n)
// Space: O(1)