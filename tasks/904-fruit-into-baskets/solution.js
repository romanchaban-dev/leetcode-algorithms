// LeetCode 904: Fruit Into Baskets
// https://leetcode.com/problems/fruit-into-baskets/

const totalFruit = (fruits) => {
  if (!Array.isArray(fruits))
    throw new TypeError("Parametr fruits must be an array type");

  const fruitsCollection = new Map();

  let fruitCount = 0;
  let maximumFruits = 0;

  let left = 0;
  let right = 0;

  while (right <= fruits.length - 1) {
    if (!fruitsCollection.has(fruits[right]) && fruitsCollection.size < 2) {
      fruitsCollection.set(fruits[right], 1);

      fruitCount = right - left + 1;

      if (fruitCount > maximumFruits) {
        maximumFruits = fruitCount;
      }
    } else if (fruitsCollection.has(fruits[right])) {
      const selectedFruit = fruitsCollection.get(fruits[right]);
      const incrementedFruitTotal = selectedFruit + 1;

      fruitsCollection.set(fruits[right], incrementedFruitTotal);

      fruitCount = right - left + 1;

      if (fruitCount > maximumFruits) {
        maximumFruits = fruitCount;
      }
    } else {
      while (
        fruitsCollection.size === 2 &&
        !fruitsCollection.has(fruits[right])
      ) {
        const selectedFruit = fruitsCollection.get(fruits[left]);
        const decrementedFruitAmount = selectedFruit - 1;

        fruitsCollection.set(fruits[left], decrementedFruitAmount);

        if (fruitsCollection.get(fruits[left]) === 0) {
          fruitsCollection.delete(fruits[left]);
        }

        left++;
      }

      fruitsCollection.set(fruits[right], 1);
      fruitCount = right - left + 1;

      if (fruitCount > maximumFruits) {
        maximumFruits = fruitCount;
      }
    }

    right++;
  }

  return maximumFruits;
};

// Time: O(n)
// Space: O(1), the map contains at most two fruit types