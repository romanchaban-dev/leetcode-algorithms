// LeetCode 242: Valid Anagram
// https://leetcode.com/problems/valid-anagram/

const isAnagram = (firstString, secondString) => {
  if (typeof firstString !== "string" || typeof secondString !== "string")
    throw new TypeError(`${firstString} or ${secondString} were missing`);

  const hashMap = new Map();

  for (const hashLetter of firstString) {
    if (!hashMap.has(hashLetter)) {
      hashMap.set(hashLetter, 1);
    } else {
      const oldLetterCount = hashMap.get(hashLetter);
      const newLetterCount = oldLetterCount + 1;
      hashMap.set(hashLetter, newLetterCount);
    }
  }

  for (const currentChar of secondString) {
    if (hashMap.has(currentChar)) {
      const oldLetterCount = hashMap.get(currentChar);
      const newLetterCount = oldLetterCount - 1;
      hashMap.set(currentChar, newLetterCount);
    } else {
      return false;
    }

    if (hashMap.get(currentChar) === 0) {
      hashMap.delete(currentChar);
    }
  }

  return hashMap.size === 0;
};

// Time: O(n + m)
// Space: O(k), where k is the number of distinct characters