import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { themeAtom } from "../recoil/themeAtom";

const THEME_STORAGE_KEY = "app-theme";

export function useTheme() {
  const [theme, setTheme] = useRecoilState(themeAtom);

  // 테마 바뀔 때만 DOM과 localStorage 갱신
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return { theme, toggleTheme };
}
