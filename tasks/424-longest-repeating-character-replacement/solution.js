// LeetCode 424: Longest Repeating Character Replacement
// https://leetcode.com/problems/longest-repeating-character-replacement/

const characterReplacement = (s, k) => {
  if (typeof s !== "string")
    throw new TypeError("Parametr s must bu a string type");

  const alphabetSequence = new Map();

  let left = 0;
  let right = 0;

  let activeSequenceLength = 0;
  let maximumSequenceLength = 0;

  let maxFrequency = 0;

  while (right <= s.length - 1) {
    activeSequenceLength = right - left;

    if (!alphabetSequence.has(s[right])) {
      alphabetSequence.set(s[right], 1);
      maxFrequency = Math.max(maxFrequency, alphabetSequence.get(s[right]));

      right++;
      activeSequenceLength = right - left;
    } else {
      const oldLetterValue = alphabetSequence.get(s[right]);
      const incrementedLetterValue = oldLetterValue + 1;

      alphabetSequence.set(s[right], incrementedLetterValue);

      maxFrequency = Math.max(maxFrequency, alphabetSequence.get(s[right]));

      right++;
      activeSequenceLength = right - left;
    }

    while (activeSequenceLength - maxFrequency > k) {
      const oldLetterValue = alphabetSequence.get(s[left]);
      const decrementedLetterValue = oldLetterValue - 1;

      alphabetSequence.set(s[left], decrementedLetterValue);

      if (alphabetSequence.get(s[left]) === 0) {
        alphabetSequence.delete(s[left]);
      }

      left++;

      activeSequenceLength = right - left;
    }

    if (activeSequenceLength > maximumSequenceLength) {
      maximumSequenceLength = activeSequenceLength;
    }
  }

  return maximumSequenceLength;
};

// Time: O(n)
// Space: O(k), where k is the number of distinct characters in the window