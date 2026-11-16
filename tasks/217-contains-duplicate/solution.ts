// LeetCode 217: Contains Duplicate
// https://leetcode.com/problems/contains-duplicate/

const containsDuplicate = (numbers: Array<number>): boolean => {
  if (!Array.isArray(numbers))
    throw new TypeError("Parametr numbers must be an array type");

  const hashMap = new Map<number, boolean>();

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
