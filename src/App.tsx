
import { Layout } from './components/Layout';
import GlobalStyle from './styles/global';
 
import {  ThemeProviderContext } from './context/ThemeContext';


function App() {
 
  return (
    <ThemeProviderContext>
      <GlobalStyle />
      <Layout />
    </ThemeProviderContext>
  )
}

export default App
