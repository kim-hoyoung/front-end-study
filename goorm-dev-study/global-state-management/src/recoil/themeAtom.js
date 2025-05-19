import { atom } from "recoil";

const THEME_STORAGE_KEY = "app-theme";

export const themeAtom = atom({
  key: "themeAtom",
  default: localStorage.getItem(THEME_STORAGE_KEY) || "light", // ★★ 핵심 ★★
});
