"use strict";

const findMax = (numbers: Array<number>): number => {
  let maxNumber = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (maxNumber < numbers[i]) {
      maxNumber = numbers[i];
    }
  }

  return maxNumber;
};

// Time: O(n)
// Space: O(1)

const findMin = (numbers: Array<number>): number => {
  let minNumber = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (minNumber > numbers[i]) {
      minNumber = numbers[i];
    }
  }

  return minNumber;
};

// Time: O(n)
// Space: O(1)

const findSecondMax = (numbers: Array<number>): number | null => {
  if (!Array.isArray(numbers))
    throw new TypeError("Parametr numbers must be an array");

  let max = numbers[0];
  let secondMax: number | null = null;

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      secondMax = max;
      max = numbers[i];
    }

    if (numbers[i] < max && (secondMax === null || numbers[i] > secondMax)) {
      secondMax = numbers[i];
    }
  }

  return secondMax;
};

// Time: O(n)
// Space: O(1)

const countOccurrences = (numbers: Array<number>, target: number) => {
  if (!Array.isArray(numbers))
    throw new TypeError("Numbers must be an array type");

  if (target === undefined) throw new Error("Target is missing");

  let count = 0;

  for (const number of numbers) {
    if (number === target) {
      count++;
    }
  }

  return count;
};

// Time: O(n)
// Space: O(1)

const reverseArray = (numbers: Array<number>): Array<number> => {
  if (!Array.isArray(numbers))
    throw new TypeError("Numbers must be an array type");

  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    let temp = numbers[left];
    numbers[left] = numbers[right];
    numbers[right] = temp;

    left++;
    right--;
  }

  return numbers;
};

// Time: O(n)
// Space: O(1)
