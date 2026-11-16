// LeetCode 1: Two Sum
// https://leetcode.com/problems/two-sum/

const twoSum = (numbers, target) => {
  if (!Array.isArray(numbers))
    throw new TypeError("Parametr numbers must be an array");

  if (typeof target !== "number")
    throw new TypeError("Target must be a number type");

  const hashMap = new Map();

  for (let i = 0; i < numbers.length; i++) {
    const neededNumber = target - numbers[i];

    if (hashMap.has(neededNumber)) {
      return [hashMap.get(neededNumber), i];
    } else {
      hashMap.set(numbers[i], i);
    }
  }
};

// Time: O(n)
// Space: O(n)