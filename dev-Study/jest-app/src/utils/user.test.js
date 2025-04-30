/* eslint-disable no-undef */

import { getUser } from "./user";

test("return a user object", () => {
  expect(getUser(1)).toEqual({
    id: 1,
    email: `user1@test.com`,
  });
});
test("throw when id is non negative", () => {
  expect(getUser(-1)).toThrow();
  expect(getUser(-1)).toThrow("Invalid ID");
});
