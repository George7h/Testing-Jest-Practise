function stringLength(string) {
  const length = string.length;
  if (length < 1 || length > 10) {
    throw new Error('Invalid string length');
  }
  return length;
}

module.exports = stringLength;
