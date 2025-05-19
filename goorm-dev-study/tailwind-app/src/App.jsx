import ThemeToggle from "./components/ThemeToggle";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 text-gray-900 dark:text-white transition-colors duration-300">
      <header className="p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Team</h1>
        <ThemeToggle />
      </header>
      <Home />
    </div>
  );
}
