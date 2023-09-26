import styled from "styled-components";

export const Container = styled.footer`
  background: ${({theme})=> theme.customBackGroundColor};
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  border-radius: 10px;
 

  button {
    font-size: 16px;
    cursor: pointer;
    background: transparent;
    border: none;
  }
`