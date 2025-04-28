// ThemeContext.tsx
"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react';

type ThemeType = 'blue' | 'purple' | 'green';

interface ThemeColors {
  primary: string;
  bubbles: string[];
}

interface ThemeContextType {
  theme: ThemeType;
  themes: Record<ThemeType, ThemeColors>;
  changeTheme: (newTheme: ThemeType) => void;
}

const defaultThemes = {
  blue: {
    primary: "bg-blue-600 hover:bg-blue-700",
    bubbles: ["#60a5fa", "#818cf8", "#34d399", "#a78bfa"]
  },
  purple: {
    primary: "bg-purple-600 hover:bg-purple-700",
    bubbles: ["#a78bfa", "#c4b5fd", "#f9a8d4", "#67e8f9"]
  },
  green: {
    primary: "bg-emerald-600 hover:bg-emerald-700",
    bubbles: ["#34d399", "#6ee7b7", "#60a5fa", "#fcd34d"]
  }
};

const ThemeContext = createContext<ThemeContextType>({
  theme: 'blue',
  themes: defaultThemes,
  changeTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>('blue');
  
  const changeTheme = (newTheme: ThemeType) => {
    setTheme(newTheme);
  };
  
  return (
    <ThemeContext.Provider value={{ theme, themes: defaultThemes, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};