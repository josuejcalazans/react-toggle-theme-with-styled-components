import styled from "styled-components";

export const Container = styled.footer`
  background: ${({theme})=> theme.customBackGroundColor};
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  border-radius: 10px;
  margin-top: 24px;

  button {
    cursor: pointer;
    background: transparent;
    border: none;
  }
`