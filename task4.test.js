const capitalize = require('./task4');

describe("capitalize function", () => {
  test("hello", () => {
    expect(capitalize("hello")).toBe("Hello");
  });
  test("i love you", () => {
    expect(capitalize("i love you")).toBe("I love you");
  });
  test("empty string", () => {
    expect(capitalize("")).toBe("");
  });
});