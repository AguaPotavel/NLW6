import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }: any) => theme.globalBackground};
    color: ${({ theme }: any) => theme.color};
  }

  body, input, button, textarea {
    font: 400 16px 'Roboto', sans-serif;
  }
`

export default GlobalStyle
