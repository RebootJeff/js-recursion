// Functions are attached to an object as methods for Jasmine to spy on
var yourAnswers = {};

/**
 * calculateExponential mimics `Math.pow()`
 * @param {Number} base
 * @param {Number} exponent - must be greater than or equal to 0
 * @returns {Number}
 */
yourAnswers.calculateExponential = function(base, exponent, result) {
  result = result || base;

  if(exponent === 0) {
    return 1;
  } else if(exponent === 1) {
    return result;
  } else {
    result *= base;
    return yourAnswers.calculateExponential(base, exponent - 1, result);
  }
};

/**
 * applyDiscount calculates a new list of prices
 * @param {Number[]} originalPrices
 * @param {Number} discountFactor
 * @returns {Number[]} - array of discounted prices
 */
yourAnswers.applyDiscount = function(originalPrices, discountFactor) {
  // your code goes HERE
};

/**
 * shallowCheck determines whether or not a value is in a collection
 * @param {Array|Object} collection
 * @param {*} target
 * @returns {Boolean}
 */
yourAnswers.shallowCheck = function(collection, target) {
  // your code goes HERE
};

/**
 * deepCountPrimitives determines the number of primitives in a collection
 * (including any nested contents)
 * @param {Array|Object} collection
 * @returns {Number}
 */
yourAnswers.deepCountPrimitives = function(collection) {
  // Delete this comment and ADD YOUR CODE HERE <(^.^<)
};
