import { selector } from "recoil";

export const usersSelector = selector({
  key: "usersSelector",
  get: async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      return {
        status: "success",
        data,
      };
    } catch (error) {
      return {
        status: "error",
        error: error.message,
      };
    }
  },
});
