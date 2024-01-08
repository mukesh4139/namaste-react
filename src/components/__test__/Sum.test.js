import Sum from "../Sum";

test("Sum function should calculate the sum of two numbers", () => {
  const result = Sum(2, 3);

  // Assertions
  expect(result).toBe(5);
});
