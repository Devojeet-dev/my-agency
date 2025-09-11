import { useEffect } from "react";
import assets from "../assets/assets";

export default function ThemeToggle({ theme, setTheme }) {
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Runs whenever theme changes
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-colors"
    >
      {theme === "dark" ? (
        <img
          src={assets.sun_icon}
          alt="Switch to light mode"
          className="w-5 h-5"
        />
      ) : (
        <img
          src={assets.moon_icon}
          alt="Switch to dark mode"
          className="w-5 h-5"
        />
      )}
    </button>
  );
}
