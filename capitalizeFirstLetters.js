//capitalizeFirstLetters.js
const assert = require('assert');

//Function

//Tests
assert.strictEqual(typeof capitalizeFirstLetters, 'function');
assert.strictEqual(capitalizeFirstLetters.length, 1);
assert.strictEqual(capitalizeFirstLetters('i am learning TDD'), 'I Am Learning TDD');
assert.strictEqual(capitalizeFirstLetters('hello'), 'Hello');
assert.strictEqual(capitalizeFirstLetters(''), '');