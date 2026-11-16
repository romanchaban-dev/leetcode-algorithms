// LeetCode 3: Longest Substring Without Repeating Characters
// https://leetcode.com/problems/longest-substring-without-repeating-characters/

const lengthOfLongestSubstring = (string) => {
  if (typeof string !== "string")
    throw new TypeError("Parametr string must be a string type");

  if (string.length === 0) return 0;

  let left = 0;
  let right = 0;

  let currentSubstringLength = 0;
  let maxSubstringLength = 0;

  const charsList = string.split("");
  const uniqueCharsList = [];

  while (right < charsList.length) {
    if (uniqueCharsList.length === 0) {
      uniqueCharsList.push(charsList[left]);
      currentSubstringLength = right - left + 1;
    }

    if (currentSubstringLength > maxSubstringLength) {
      maxSubstringLength = currentSubstringLength;
    }

    if (!uniqueCharsList.includes(charsList[right + 1])) {
      if (charsList[right + 1] !== undefined) {
        uniqueCharsList.push(charsList[right + 1]);
        right++;
      } else {
        break;
      }

      currentSubstringLength = right - left + 1;
    } else {
      while (uniqueCharsList.includes(charsList[right + 1])) {
        uniqueCharsList.shift();
        left++;
      }

      if (charsList[right + 1] !== undefined) {
        uniqueCharsList.push(charsList[right + 1]);
        right++;
      }

      currentSubstringLength = right - left + 1;
    }

    if (currentSubstringLength > maxSubstringLength) {
      maxSubstringLength = currentSubstringLength;
    }
  }

  return maxSubstringLength;
};

// Time: O(n^2)
// Space: O(n)