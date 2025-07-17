import { createGlobalStyle } from 'styled-components';
import './normalize.css';
export const GlobalStyles = createGlobalStyle`
*, *::before, *::after {
  box-sizing: border-box;
}
body{
    background-color:gray;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;
    color: white;
}

img{
    max-width: 100%;
    display: block;
}

ul{
    list-style: none;
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
}

a{
    text-decoration: none;
    color: inherit;
}`;
