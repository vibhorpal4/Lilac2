import { createGlobalStyle } from "styled-components";

export const theme = {
  backgroundColor: "#FFFFFF",
  secondaryBackgroundColor: "#FFFFFF",
  primaryColor: "#3187ED",
  secondaryColor: "#00C6D7",
  textColorDark: "#000000",
  textColorLight: "#8D8D8D",
};

export const GlobalStyle = createGlobalStyle`
  *{
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
  }
    body {
        background-color: ${({ theme }) => theme.backgroundColor};
    }
`;
