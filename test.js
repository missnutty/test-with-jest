const {sum} = require('./sum.js');

test('sum 9 + 21 to equal 30', () => {
    let result = sum(9,21);
    expect(result).toBe(30);
 })