function stringLength(string) {
  if (string.length === 0 || string.length > 10) {
    throw new Error('Invalid string length');
  }
  return string.length;
}

module.exports = stringLength;