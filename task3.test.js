const Calculator = require('./task3');

describe("addition", () => {
  test("n+0 === n", () => {
    expect(Calculator.add(0, 0)).toBe(0);
    expect(Calculator.add(5, 0)).toBe(5);
    expect(Calculator.add(12, 0)).toBe(12);
    expect(Calculator.add(-7, 0)).toBe(-7);
  });
  test("n+n = 2*n", () => {
    expect(Calculator.add(0, 0)).toBe(0);
    expect(Calculator.add(5, 5)).toBe(10);
    expect(Calculator.add(12, 12)).toBe(24);
    expect(Calculator.add(-7, -7)).toBe(-14);
  });
  test("1205 + 452", () => {
    expect(Calculator.add(1205, 452)).toBe(1205 + 452);
  });
});

describe("subtraction", () => {
  test("4-6 = -2", () => {
    expect(Calculator.subtract(4, 6)).toBe(-2);
  });
  test("n - n = 0", () => {
    expect(Calculator.subtract(4, 4)).toBe(0);
    expect(Calculator.subtract(-7, -7)).toBe(0);
    expect(Calculator.subtract(5, 5)).toBe(0);
  });
  test("n-(-n) = 2*n", () => {
    expect(Calculator.subtract(3, -3)).toBe(6);
    expect(Calculator.subtract(-3, 3)).toBe(-6);
  });
});


describe("division", () => {
  test("4/(-2) = -2", () => {
    expect(Calculator.divide(4, -2)).toBe(-2);
  });
  test("n/0 = +-Infinity", () => {
    expect(Calculator.divide(4, 0)).toBe(Infinity);
    expect(Calculator.divide(-10, 0)).toBe(-Infinity);
  });
  test("n / 1 = n", () => {
    expect(Calculator.divide(4, 1)).toBe(4);
    expect(Calculator.divide(-7, 1)).toBe(-7);
    expect(Calculator.divide(4, -2)).toBe(-2);
  });
});


describe("multiplication", () => {
  test("4 * (-2) = -8", () => {
    expect(Calculator.multiply(4, -2)).toBe(-8);
  });
  test("n * 0 = 0", () => {
    expect(Calculator.multiply(4, 0)).toBe(0);
    expect(Calculator.multiply(-10, 0)).toBe(-0);
  });
  test("n * 1 = n", () => {
    expect(Calculator.multiply(4, 1)).toBe(4);
    expect(Calculator.multiply(-7, 1)).toBe(-7);
    expect(Calculator.multiply(77, 1)).toBe(77);
  });
});