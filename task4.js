function capitalize(string) {
  if (typeof string !== 'string') {
    throw new TypeError('It should be a string.');
  }

  return string[0].toUpperCase() + string.slice(1);
}

module.exports = { capitalize };
