// LeetCode 49: Group Anagrams
// https://leetcode.com/problems/group-anagrams/

const groupAnagrams = (strs: Array<string>): Array<Array<string>> => {
  const groupedAnagrams = new Map<string, Array<string>>();

  for (const string of strs) {
    const sortedKey = string.split("").sort().join("");

    if (!groupedAnagrams.has(sortedKey)) {
      groupedAnagrams.set(sortedKey, [string]);
    } else {
      const anagramsArray = groupedAnagrams.get(sortedKey);

      if (anagramsArray) {
        anagramsArray.push(string);
      } else {
        groupedAnagrams.set(sortedKey, [string]);
      }
    }
  }

  return Array.from(groupedAnagrams.values());
};

// Time: O(n * k log k), where n is the number of strings and k is the maximum string length
// Space: O(n * k)
