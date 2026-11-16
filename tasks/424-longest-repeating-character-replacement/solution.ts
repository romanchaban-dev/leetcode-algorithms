// LeetCode 424: Longest Repeating Character Replacement
// https://leetcode.com/problems/longest-repeating-character-replacement/

const characterReplacement = (s: string, k: number): number => {
  if (typeof s !== "string")
    throw new TypeError("Parametr s must bu a string type");

  const alphabetSequence = new Map<string, number>();

  let left = 0;
  let right = 0;

  let activeSequenceLength = 0;
  let maximumSequenceLength = 0;

  let maxFrequency = 0;

  while (right <= s.length - 1) {
    activeSequenceLength = right - left;

    const currentLetterValue = alphabetSequence.get(s[right]) ?? 0;
    const incrementedLetterValue = currentLetterValue + 1;

    alphabetSequence.set(s[right], incrementedLetterValue);
    maxFrequency = Math.max(maxFrequency, incrementedLetterValue);

    right++;
    activeSequenceLength = right - left;

    while (activeSequenceLength - maxFrequency > k) {
      const leftLetterValue = alphabetSequence.get(s[left]) ?? 0;
      const decrementedLetterValue = leftLetterValue - 1;

      if (decrementedLetterValue > 0) {
        alphabetSequence.set(s[left], decrementedLetterValue);
      } else {
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
