// LeetCode 1456: Maximum Number of Vowels in a Substring of Given Length
// https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/

const maxVowels = (string: string, kUnique: number): number => {
  const vowels = "aeiou";
  let currVowelsCount = 0;
  let maxVowelsCount = currVowelsCount;

  let left = 0;
  let right = kUnique - 1;

  for (let i = 0; i < right + 1; i++) {
    if (vowels.includes(string[i])) {
      currVowelsCount++;
    }
  }

  maxVowelsCount = currVowelsCount;

  while (right < string.length - 1) {
    if (vowels.includes(string[left])) {
      currVowelsCount--;
    }

    if (vowels.includes(string[right + 1])) {
      currVowelsCount++;
    }

    if (currVowelsCount > maxVowelsCount) {
      maxVowelsCount = currVowelsCount;
    }

    left++;
    right++;
  }

  return maxVowelsCount;
};

// Time: O(n)
// Space: O(1)
