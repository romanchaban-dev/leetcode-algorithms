// LeetCode 49: Group Anagrams
// https://leetcode.com/problems/group-anagrams/

const groupAnagrams = (strs) => {
  const groupedAnagrams = new Map();

  for (const string of strs) {
    const sortedKey = string.split("").sort().join("");

    if (!groupedAnagrams.has(sortedKey)) {
      groupedAnagrams.set(sortedKey, [string]);
    } else {
      const anagramsArray = groupedAnagrams.get(sortedKey);
      anagramsArray.push(string);
    }
  }

  return Array.from(groupedAnagrams).map(([_, anagrams]) => anagrams);
};

// Time: O(n * k log k), where n is the number of strings and k is the maximum string length
// Space: O(n * k)