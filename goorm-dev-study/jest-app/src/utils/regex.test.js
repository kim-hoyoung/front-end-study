import { getUser } from "./user";

/* eslint-disable no-undef */
test("string", () => {
  expect(getUser(1).email).toBe("user1@test.com");
  expect(getUser(2).email).toMatch(/.*test.com$/);
});
