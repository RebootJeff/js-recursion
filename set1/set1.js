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

/**
 * applyDiscount calculates a new list of prices
 * @param {Number[]} originalPrices
 * @param {Number} discountFactor
 * @returns {Number[]} - array of discounted prices
 */
function applyDiscount(originalPrices, discountFactor) {
  // your code goes HERE
}

/**
 * shallowCheck determines whether or not a value is in a collection
 * @param {Array|Object} collection
 * @param {*} target
 * @returns {Boolean}
 */
function shallowCheck(collection, target) {
  // your code goes HERE
}

/**
 * deepCountPrimitives determines the number of primitives in a collection
 * (including any nested contents)
 * @param {Array|Object} collection
 * @returns {Number}
 */
function deepCountPrimitives(collection) {
  // Delete this comment and ADD YOUR CODE HERE <(^.^<)
}
