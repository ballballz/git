// index.test.js
const add = require('./index');

test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});

test('adds 1 + 3 to equal 4', () => {
    expect(add(1, 3)).toBe(4);
});

