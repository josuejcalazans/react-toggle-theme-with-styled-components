import {  ThemeProvider } from 'styled-components';
import { Layout } from './components/Layout';
import GlobalStyle from './styles/global';
 
import themes from './styles/themes';
import {  useMemo, useState } from 'react';
import { ThemeContext } from './context/ThemeContext';


function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const currentTheme = useMemo(()=>{
    return themes[theme] || themes.dark
  },[theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyle />
        <Layout />
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default App
