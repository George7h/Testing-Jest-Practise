const reverseString = require('./task2.js');

test('Reverse string', () => {
  const input = 'Hello, World!';
  
  const expected = '!dlroW ,olleH';
  
  expect(reverseString(input)).toEqual(expected);
});