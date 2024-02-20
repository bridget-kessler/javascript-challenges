const evaluateRPN = require("./index");

test("Should return 9.", () => {
  expect(evaluateRPN(["2", "1", "+", "3", "*"])).toBe(9);
});
test("Should return 22.", () => {
  expect(
    evaluateRPN([
      "10",
      "6",
      "9",
      "3",
      "+",
      "-11",
      "*",
      "/",
      "*",
      "17",
      "+",
      "5",
      "+",
    ])
  ).toBe(22);
});
test("Should return 6.", () => {
  expect(evaluateRPN(["4", "13", "5", "/", "+"])).toBe(6);
});
test("Should return 5.", () => {
  expect(
    evaluateRPN([
      "15",
      "7",
      "1",
      "1",
      "+",
      "-",
      "/",
      "3",
      "*",
      "2",
      "1",
      "1",
      "+",
      "+",
      "-",
    ])
  ).toBe(5);
});
