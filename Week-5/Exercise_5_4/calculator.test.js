const mathOperations = require("./calculator");
describe("Calculator tests", () => {
  test("adding 1 + 2 should return 3", () => {
    //assert
    expect(mathOperations.sum(1, 2)).toBe(3);
  });
  test("subtracting 5 and 10 return should be -5", () => {
    //assert
    expect(mathOperations.diff(5, 10)).toBe(-5);
  });
  test("multiplying 2 and 8 should return 16", () => {
    //assert
    expect(mathOperations.product(2, 8)).toBe(16);
  });
});
