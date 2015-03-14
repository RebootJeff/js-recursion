describe('Exercises: Set 1', function() {

  var actual;

  describe('calculateExponential', function() {

    it('should mimic Math.pow', function() {
      actual = yourAnswers.calculateExponential(1, 2);
      expect(actual).toBe(Math.pow(1, 2));
      // expect(yourAnswers.calculateExponential(2, -1)).toBe(Math.pow(2, -1));
      expect(yourAnswers.calculateExponential(2, 0)).toBe(Math.pow(2, 0));
      expect(yourAnswers.calculateExponential(2, 1)).toBe(Math.pow(2, 1));
      expect(yourAnswers.calculateExponential(2, 2)).toBe(Math.pow(2, 2));
      expect(yourAnswers.calculateExponential(2, 3)).toBe(Math.pow(2, 3));
      expect(yourAnswers.calculateExponential(2, 4)).toBe(Math.pow(2, 4));
    });

  });

  describe('applyDiscount', function() {

    it('should ', function() {
      actual = yourAnswers.applyDiscount();
      expect(actual).toBe(false);
    });

  });

  describe('shallowCheck', function() {

    it('should ', function() {
      actual = yourAnswers.shallowCheck();
      expect(actual).toBe(false);
    });

  });

  describe('deepCountPrimitives', function() {

    it('should ', function() {
      actual = yourAnswers.deepCountPrimitives();
      expect(actual).toBe(false);
    });

  });

});
