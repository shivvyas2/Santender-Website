import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeProvider";

export function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  const [isOn, setIsOn] = useState(theme === "dark");

  useEffect(() => {
    setIsOn(theme === "dark");
  }, [theme]);

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-8 flex items-center rounded-full p-1 transition-colors duration-300 focus:outline-none bg-black border border-[#B2B2B2]"
      aria-label="Toggle theme"
    >
      <div
        className={`absolute left-1.5 top-1 w-5 h-5 bg-white rounded-full transform transition-transform duration-300 ease-in-out flex items-center justify-center ${
          isOn ? "translate-x-6" : "translate-x-0"
        }`}
      />
      <div className="flex justify-between w-full gap-1.5 px-1">
        <Moon className="w-3.5 h-3.5 text-white" />
        <Sun className="w-3.5 h-3.5 text-white" />
      </div>
    </button>
  );
}

