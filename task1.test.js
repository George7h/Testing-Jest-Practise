const stringLength = require('./task1.js');

  it('Return correct length of the string', () => {
    expect(stringLength('Hello')).toBe(5);
  });

  it('error string is shorter than 1 character', () => {
    expect(() => stringLength('')).toThrow('Invalid string length');
  });

  it('Error string is longer than 10 characters', () => {
    expect(() => stringLength('ThisIsALongString')).toThrow('Invalid string length');
  });
