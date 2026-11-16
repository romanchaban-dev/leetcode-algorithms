// LeetCode 383: Ransom Note
// https://leetcode.com/problems/ransom-note/

const ransomNote = (ransomNote: string, magazine: string): boolean => {
  if (typeof ransomNote !== "string" || typeof magazine !== "string")
    throw new TypeError(
      `parametr ${ransomNote} and ${magazine} must be a string type`,
    );

  const hashMap = new Map<string, number>();

  for (const letter of ransomNote) {
    const previousValue = hashMap.get(letter) ?? 0;
    hashMap.set(letter, previousValue + 1);
  }

  for (const letter of magazine) {
    if (!hashMap.has(letter)) {
      continue;
    }

    const previousValue = hashMap.get(letter);

    if (previousValue === undefined) {
      hashMap.delete(letter);
      continue;
    }

    const newValue = previousValue - 1;
    hashMap.set(letter, newValue);

    if (newValue === 0) {
      hashMap.delete(letter);
    }
  }

  return hashMap.size === 0;
};

// Time: O(n + m)
// Space: O(k), where k is the number of distinct characters in ransomNote
