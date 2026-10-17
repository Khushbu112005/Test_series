import { Sun, Moon } from "lucide-react";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

function ModeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const isDarkMode = theme === "dark";
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
      className="flex h-10 w-10 items-center justify-center rounded-full
        hover:bg-slate-100 dark:hover:bg-slate-800
        transition-colors duration-200"
    >
      {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
export default ModeButton;
