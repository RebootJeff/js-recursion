# Set 1

## Instructions

...

# Exercises

## S1.1 - calculateExponential

Rewrite the following function to use recursion instead of a `for` loop.

```JavaScript
/**
 * calculateExponential mimics `Math.pow()`
 * @param {Number} base
 * @param {Number} exponent - must be greater than or equal to 0
 * @returns {Number}
 */
function calculateExponential(base, exponent) {
  var result = 1;

  for(var i = 0; i < exponent; i++) {
    result *= base;
  }

  return result;
}

// Example usage:
console.log(calculateExponential(2, 0)); // logs 1
console.log(calculateExponential(2, 1)); // logs 2
console.log(calculateExponential(2, 2)); // logs 4
console.log(calculateExponential(2, 3)); // logs 8
```


## S1.2 - applyDiscount

Rewrite the following function to use recursion instead of a `for` loop.

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
