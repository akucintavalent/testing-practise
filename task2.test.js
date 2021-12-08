const reverseString = require('./task2');


describe("reverseString function", () => {
  test("hello", () => {
    expect(reverseString("hello")).toBe("olleh");
  });
  test("I love you", () => {
    expect(reverseString("I love you")).toBe("uoy evol I");
  });
  test("empty string", () => {
    expect(reverseString("")).toBe("");
  });
});