//capitalizeFirstLetters.js
const assert = require('assert');
const capitalizeFirstLetters = require('../capitalizeFirstLetters');

//Tests
describe('capitalizeFirstLetters', () => {
    it('is a function accepting one argument', () => {
        assert.strictEqual(typeof capitalizeFirstLetters, 'function');
        assert.strictEqual(capitalizeFirstLetters.length, 1);
    });

    it('transforms the sentence/word correctly', () => {
        assert.strictEqual(capitalizeFirstLetters('i am learning TDD'), 'I Am Learning TDD');
        assert.strictEqual(capitalizeFirstLetters('hello'), 'Hello');
    });

    it('works with a 1-character string', () => {
        assert.strictEqual(capitalizeFirstLetters('z'), 'Z');
    })

    it('works with an empty string', () => {
        assert.strictEqual(capitalizeFirstLetters(''), '');
    });
});