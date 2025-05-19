import useDarkMode from "../../hooks/useDarkMode";

export default function ThemeToggle() {
  const [isDark, toggleDark] = useDarkMode();

  return (
    <button
      onClick={toggleDark}
      className="px-4 py-2 rounded bg-gray-200 dark:bg-zinc-700 text-sm cursor-pointer"
    >
      {isDark ? "🌙 다크 모드" : "☀️ 라이트 모드"}
    </button>
  );
}
