# Set 1

These exercises focus on the basics of recursion by emphasizing that loops can be replaced with recursion.

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
calculateExponential(2, 0); // returns 1
calculateExponential(2, 1); // returns 2
calculateExponential(2, 2); // returns 4
calculateExponential(2, 3); // returns 8
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

## S1.3 - shallowCheck

Rewrite the following function to use recursion instead of a `for` loop.

```JavaScript
/**
 * shallowCheck determines whether or not a value is in a collection
 * @param {Array|Object} collection
 * @param {*} target
 * @returns {Boolean}
 */
function shallowCheck(collection, target) {
  if(Array.isArray(collection)) {
    for(var i = 0; i < arr.length; i++) {
      if(arr[i] === target) {
        return true;
      }
    }
  } else {
    // If collection isn't an Array, let's just assume it's a plain JS object
    for(var key in collection) {
      if(collection[key] === target) {
        return true;
      }
    }
  }

  return false;
}

// Example usage:
shallowCheck([1, 'a', 2, 'b'], 'c'); // returns false;
shallowCheck([1, 'a', 2, 'b'], 'a'); // returns true;
shallowCheck({ price: 1 }, 1); // returns true;
```

# Extra Tough Exercises

## S1.extra1 - deepCountPrimitives

Write a function that uses recursion to count the number of values (objects of primitive data type) in a collection. If the collection contains nested collections, then `deepCountPrimitives` should count search them too. **Hint:** You may need to use recursion *and* loops.

```JavaScript
/**
 * deepCountPrimitives determines the number of primitives in a collection
 * (including any nested contents)
 * @param {Array|Object} collection
 * @returns {Number}
 */
function deepCountPrimitives(collection) {
  // Delete this comment and ADD YOUR CODE HERE <(^.^<)
}

// Example usage:
deepCountPrimitives([1, 2, { a: 3 }]); // returns 3;
deepCountPrimitives({ a: 1, b: [2, 3] }); // returns 3;
deepCountPrimitives([{ a: { b: [{ c: 1 }, { d: 2 }] } }]); // returns 2;
```
