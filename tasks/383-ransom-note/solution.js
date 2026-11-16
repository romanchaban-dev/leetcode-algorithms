// LeetCode 383: Ransom Note
// https://leetcode.com/problems/ransom-note/

const ransomNote = (ransomNote, magazine) => {
  if (typeof ransomNote !== "string" || typeof magazine !== "string")
    throw new TypeError(
      `parametr ${ransomNote} and ${magazine} must be a string type`,
    );

  const hashMap = new Map();

  for (const letter of ransomNote) {
    if (!hashMap.has(letter)) {
      hashMap.set(letter, 1);
    } else {
      const oldValue = hashMap.get(letter);
      const newValue = oldValue + 1;
      hashMap.set(letter, newValue);
    }
  }

  for (const letter of magazine) {
    if (hashMap.has(letter)) {
      const oldValue = hashMap.get(letter);
      const newValue = oldValue - 1;
      hashMap.set(letter, newValue);

      if (newValue === 0) {
        hashMap.delete(letter);
      }
    }
  }

  return hashMap.size === 0;
};

// Time: O(n + m)
// Space: O(k), where k is the number of distinct characters in ransomNote