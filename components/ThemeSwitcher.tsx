"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed sm:left-auto top-5 left-4 transition duration-500 ease-in-out rounded-full">
      {theme === "dark" ? (
        <div onClick={() => setTheme("light")}>
          <FaSun className="sm:w-6 sm:h-6 w-5 h-5" />
        </div>
      ) : (
        <div onClick={() => setTheme("dark")}>
          <FaMoon className="w-6 h-6" />
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
