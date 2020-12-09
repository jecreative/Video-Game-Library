import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    &::-webkit-scrollbar{
      width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb{
      background-color: darkgrey;
    }
    &::-webkit-scrollbar-track {
    background: white;
  }
  }
  body {
    font-family: 'Montserrat', sans-serif;
    width: 100%;
  }
  h2 {
    font-size: 2rem;
    font-family: 'Abril Fatface', cursive;
    font-weight: lighter;
    color: #333;
    @media(max-width: 768px){
      font-size: 1.5rem;
    }
  }
  h3 {
    font-size: 1.3rem;
    color: #333;
    padding: 1rem 0rem;
    @media(max-width: 768px){
      font-size: 1rem;
    }
  }
  p {
    font-size: 1rem;
    line-height: 200%;
    color: #696969;
    @media(max-width: 768px){
      font-size: .8rem;
    }
  }
  a {
    text-decoration: none;
    color: #333;
  }
  img { display: block}
`
export default GlobalStyle
