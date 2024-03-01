const calculateNumber = require('./0-calcul');
const assert = require('assert');

describe('calculateNumber', () => {
	it('Should round a and b and return the sum of it', () => {
		assert.strictEqual(calculateNumber(-1, -2.7), -4);
	});

	it('Should round a and b and return the sum of it', () => {
		assert.strictEqual(calculateNumber(-1.7, -2), -4);
	});
});

