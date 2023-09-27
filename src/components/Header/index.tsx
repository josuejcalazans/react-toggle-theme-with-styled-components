import { useContext } from "react";
import { Container } from "./style";
import { ThemeContext } from "../../context/ThemeContext";

export function Header () {


  const {theme, onToggleTheme} = useContext(ThemeContext)

  return (
    <Container>
      <h1>I's Blog</h1>
      <button type="button" onClick={onToggleTheme}>
       {theme === 'dark'? '🌚' : ' 🌞'} 
      </button>
    </Container>
  )
}