/* eslint-disable no-undef */
test("array", () => {
  const colors = ["Red", "Yellow", "Blue"];
  expect(colors).toHaveLength(3);
  // color 의 길이가 3인지
  expect(colors).toContain("Yellow");
  // color 안에 Yellow 가 있는지
  expect(colors).not.toContain("Green");
  // Green 이 없는지?
});
