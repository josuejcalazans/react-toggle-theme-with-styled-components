import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Container } from "./style";

export function Footer () {
  const { theme, onToggleTheme } = useContext(ThemeContext);
  return (
    <Container>
      <span> I's Blog. Todos os direitos reservados.</span>
      <button type="button" onClick={onToggleTheme}>
       {theme === 'dark'? '🌚' : ' 🌞'} 
      </button>
    </Container>
  )
}