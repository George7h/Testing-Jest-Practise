const { capitalize } = require('./task4.js');

test('capitalize function capitalizes the first character of a string', () => {
  const input = 'hello';
  const expectedOutput = 'Hello';

  const result = capitalize(input);

  expect(result).toBe(expectedOutput);
});
