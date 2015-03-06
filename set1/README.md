# Set 1

## Instructions

...

# Exercises

## S1.1 - Convert Loops

Rewrite the following functions to use recursion instead of loops.

```JavaScript
/**
 * applyDiscount calculates a new list of prices
 * @param {Number[]} originalPrices
 * @param {Number} discountFactor
 * @returns {Number[]} - array of discounted prices
 */
function applyDiscount(originalPrices, discountFactor) {
  var newPrices = [];

  for(var i = 0; i < originalPrices.length; i++) {
    newPrices.push(originalPrices[i] * discountFactor);
  }

  return newPrices;
}

// Example usage:
var discountedPrices = applyDiscount([5, 10, 22], 0.75);
console.log(discountedPrices); // logs [3.75, 7.5, 16.5]
```
