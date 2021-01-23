import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box !important;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;

    &::-webkit-scrollbar {
      width: 5px;
    }
 
    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
      border-radius: 10px;
    }
  
    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
    }
  }
`