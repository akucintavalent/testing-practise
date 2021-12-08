const stringLength = require('./task1');


describe("stringLength function", () => {
  test("empty string", () => {
    expect(() => stringLength("")).toThrowError();
  });
  test("\"hello\".length === 5", () => {
    expect(stringLength("hello")).toBe(5);
  });
  test("\"I love you\".length === 10", () => {
    expect(stringLength("I love you")).toBe(10);
  });
  test("\"ababahalamaga\".length === 13", () => {
    expect(() => stringLength("ababahalamaga")).toThrowError(new Error('Invalid string length'));
  });
});