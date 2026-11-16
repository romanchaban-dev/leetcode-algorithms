// LeetCode 1: Two Sum
// https://leetcode.com/problems/two-sum/

const twoSum = (
  numbers: number[],
  target: number,
): number[] | undefined => {
  if (!Array.isArray(numbers))
    throw new TypeError("Parametr numbers must be an array");

  if (typeof target !== "number")
    throw new TypeError("Target must be a number type");

  const hashMap = new Map<number, number>();

  for (let i = 0; i < numbers.length; i++) {
    const neededNumber = target - numbers[i];

    const matchingIndex = hashMap.get(neededNumber);
    if (matchingIndex !== undefined) {
      return [matchingIndex, i];
    } else {
      hashMap.set(numbers[i], i);
    }
  }
};

// Time: O(n)
// Space: O(n)