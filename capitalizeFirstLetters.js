//capitalizeFirstLetters.js
const assert = require('assert');

//Function
function capitalizeFirstLetters(input) {
    const splitInput = input.split(' ');
    for(let i = 0; i < splitInput.length; i++)
        splitInput[i] = splitInput[i].charAt(0).toUpperCase() + splitInput[i].slice(1);
    return splitInput.join(' ');
}

//Tests
assert.strictEqual(typeof capitalizeFirstLetters, 'function');
assert.strictEqual(capitalizeFirstLetters.length, 1);
assert.strictEqual(capitalizeFirstLetters('i am learning TDD'), 'I Am Learning TDD');
assert.strictEqual(capitalizeFirstLetters('hello'), 'Hello');
assert.strictEqual(capitalizeFirstLetters(''), '');