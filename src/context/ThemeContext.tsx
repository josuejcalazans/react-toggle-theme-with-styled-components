import { createContext, useEffect, useMemo, useState } from "react";
import themes from "../styles/themes";
import { ThemeProviderProps } from "./themeContext.types";
import { ThemeProvider } from "styled-components";

export const ThemeContext = createContext({
  theme: 'dark',
  onToggleTheme: () => {},
  currentTheme: themes.dark
});

export function ThemeProviderContext({children}:ThemeProviderProps) {
  const storedTheme = localStorage.getItem('theme');
  const initialTheme = storedTheme && (storedTheme === 'dark' || storedTheme === 'light') ? storedTheme : 'dark';

  const [theme, setTheme] = useState<'dark' | 'light'>(initialTheme);

  const currentTheme = useMemo(() => themes[theme] || themes.dark, [theme]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  
  return (
    <ThemeContext.Provider
      value={{
        theme,
        onToggleTheme: () => setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark')),
        currentTheme,
      }}
    >
      <ThemeProvider theme={currentTheme}>
      {children}
      </ThemeProvider>
     
    </ThemeContext.Provider>
  )
}
 