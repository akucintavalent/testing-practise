function reverseString(string) {
  let res = "";
  string.split("").forEach(char => res = char + res);
  return res;
}

module.exports = reverseString;