const Calculator = require('./task3.js');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('add', () => {
    test('adds two positive numbers correctly', () => {
      expect(calculator.add(1, 2)).toBe(3);
    });

    test('adds a positive and a negative number correctly', () => {
      expect(calculator.add(2, -2)).toBe(0);
    });

    test('returns zero when adding zero to any number', () => {
      expect(calculator.add(0, 1)).toBe(1);
      expect(calculator.add(-1, 0)).toBe(-1);
      expect(calculator.add(0, 0)).toBe(0);
    });
  });

  describe('subtract', () => {
    test('subtracts two positive numbers correctly', () => {
      expect(calculator.subtract(3, 1)).toBe(2);
    });

    test('subtracts a negative number from a positive number correctly', () => {
      expect(calculator.subtract(2, -2)).toBe(4);
    });

    test('returns the same number when subtracting zero from any number', () => {
      expect(calculator.subtract(2, 0)).toBe(2);
      expect(calculator.subtract(-2, 0)).toBe(-2);
      expect(calculator.subtract(0, 0)).toBe(0);
    });
  });

  describe('divide', () => {
    test('divides two positive numbers correctly', () => {
      expect(calculator.divide(2, 2)).toBe(1);
    });

    test('divides a negative number by a positive number correctly', () => {
      expect(calculator.divide(-4, 2)).toBe(-2);
    });

    test('throws an error when dividing by zero', () => {
      expect(() => calculator.divide(2, 0)).toThrow('Division by zero');
    });
  });

  describe('multiply', () => {
    test('multiplies two positive numbers correctly', () => {
      expect(calculator.multiply(2, 3)).toBe(6);
    });

    test('multiplies a positive and a negative number correctly', () => {
      expect(calculator.multiply(-2, 3)).toBe(-6);
    });

    test('returns zero when multiplying any number by zero', () => {
      expect(calculator.multiply(2, 0)).toBe(0);
      expect(calculator.multiply(-2, 0)).toBe(0);
      expect(calculator.multiply(0, 0)).toBe(0);
    });
  });
});
