const { expect, test } = require("@jest/globals");
const sum = require("../src/kalkulator.js");

test("1 + 2 er 3", () => {
  expect(sum(1, 2)).toBe(3);
});
