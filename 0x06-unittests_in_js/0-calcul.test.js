const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('test calculateNumber', () => {
  it('should return the sum of two numbers', () => {
    assert.strictEqual(calculateNumber(1.1, 1.1), 2);
  });

  it('should return a negative sum', () => {
    assert.strictEqual(calculateNumber(-1.1, -1.1), -2);
  });

  it('should handle zero', () => {
    assert.strictEqual(calculateNumber(1.1, 0), 1);
  });
});

