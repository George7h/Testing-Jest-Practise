// calculator.js

class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error('Division by zero');
    }
    return a / b;
  }

  multiply(a, b) {
    if (b === 0) {
      return 0;
    }
    else if(a === 0 ) {
      return 0;
    }
    else return a * b;
  }
}

module.exports = Calculator;
