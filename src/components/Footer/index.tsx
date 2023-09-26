import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Container } from "./style";

export function Footer () {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <Container>
      <span> I's Blog. Todos os direitos reservados.</span>
      <button type="button" onClick={toggleTheme}>
       {theme === 'dark'? '🌚' : ' 🌞'} 
      </button>
    </Container>
  )
}