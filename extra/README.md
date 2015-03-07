# Extra

These are all tougher exercises. Proceed with caution, but give yourself some props for trying!

## Instructions

...

# Exercises

## Ext.1 - Map

Use recursion to write a function called `map` that transforms an array's data to produce a new array. **Hint:** You may need to study up on "higher-order functions" in order to complete this exercise.

```JavaScript
/**
 * Map generates a transformed copy of an array
 * @param {Array} arr - original array of data
 * @param {Function} callback - transformer
 * @returns {Array} - new array of transformed data
 */
function map(arr, callback) {
  // Delete this comment and ADD YOUR CODE HERE <(^.^<)
}

// Example usage: apply 50% discount to a collection of prices
var prices = [10, 15, 20, 18];
var discountedPrices = map(prices, function(price) {
  return price / 2;
});
```
