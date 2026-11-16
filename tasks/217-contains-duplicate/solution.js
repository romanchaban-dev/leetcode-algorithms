// LeetCode 217: Contains Duplicate
// https://leetcode.com/problems/contains-duplicate/

const containsDuplicate = (numbers) => {
  if (!Array.isArray(numbers))
    throw new TypeError("Parametr numbers must be an array type");

  const hashMap = new Map();

  for (const number of numbers) {
    if (!hashMap.has(number)) {
      hashMap.set(number, true);
    } else {
      return true;
    }
  }

  return false;
};

// Time: O(n)
// Space: O(n)