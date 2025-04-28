import React from "react";
import { useTheme } from "@/app/context/ThemeContext";

export const ThemeSelector: React.FC = () => {
  const { theme, changeTheme } = useTheme();
  
  return (
    <div className="md:flex space-x-2 mr-4">
      <button
        onClick={() => changeTheme("blue")}
        className={`w-6 h-6 rounded-full bg-blue-600 ${
          theme === "blue" ? "ring-2 ring-blue-300" : ""
        }`}
        aria-label="Blue theme"
      ></button>
      <button
        onClick={() => changeTheme("purple")}
        className={`w-6 h-6 rounded-full bg-purple-600 ${
          theme === "purple" ? "ring-2 ring-purple-300" : ""
        }`}
        aria-label="Purple theme"
      ></button>
      <button
        onClick={() => changeTheme("green")}
        className={`w-6 h-6 rounded-full bg-emerald-600 ${
          theme === "green" ? "ring-2 ring-emerald-300" : ""
        }`}
        aria-label="Green theme"
      ></button>
    </div>
  );
};