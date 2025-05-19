import { useTheme } from "../hooks/useTheme";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} style={{ marginBottom: 20 }}>
      현재 테마: {theme} (클릭해서 전환)
    </button>
  );
}

export default ThemeToggle;
