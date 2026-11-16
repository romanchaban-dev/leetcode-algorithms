// LeetCode 344: Reverse String
// https://leetcode.com/problems/reverse-string/

const reverseString = (arrayOfSymbols: Array<string>): Array<string> => {
  let left = 0;
  let right = arrayOfSymbols.length - 1;

  while (left < right) {
    const temp = arrayOfSymbols[left];
    arrayOfSymbols[left] = arrayOfSymbols[right];
    arrayOfSymbols[right] = temp;

    left++;
    right--;
  }

  return arrayOfSymbols;
};

// Time: O(n)
// Space: O(1)
