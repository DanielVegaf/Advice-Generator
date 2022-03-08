import { createGlobalStyle } from 'styled-components'
import colors from './Colors'

const GlobalStyle = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');
  body {
    background-color: ${colors.DarkGrayishBlue};
    padding: 1.25rem;
    font-family: "Manrope", sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 0.1px);
    text-align: center;
  }
`;

export default GlobalStyle