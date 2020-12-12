//Rectangle.js
const assert = require('assert');
const Rectangle = require('../Rectangle');

//Tests
describe('Rectangle', () => {
    it('is a class accepting two arguments', () => {
        assert.strictEqual(Rectangle.length, 2);
    });

    it('returns TRUE with the method isSquare() if the instance has both sides of the same length', () => {
        const rectangle = new Rectangle(4, 4);
        assert.strictEqual(rectangle.isSquare(), true);
    });

    it('returns FALSE with the method isSquare() if the instance doesn\'t have both sides of the same length', () => {
        const rectangle = new Rectangle(4, 2);
        assert.strictEqual(rectangle.isSquare(), false);
    });
    
    it('returns the area of the Rectangle thanks to the method getArea()', () => {
        const rectangle = new Rectangle(13, 7);
        assert.strictEqual(rectangle.getArea(), 91);
    });

    it('returns the perimeter of the Rectangle thanks to the method getPerimeter()', () => {
        const rectangle = new Rectangle(8, 4);
        assert.strictEqual(rectangle.getPerimeter(), 24);
    });
});