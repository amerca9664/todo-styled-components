import { createGlobalStyle } from 'styled-components';
import './normalize.css';
export const GlobalStyles = createGlobalStyle`
*, *::before, *::after {
  box-sizing: border-box;
}
body{
    background: top / 100vw 30vh no-repeat ${({ $image }) => $image} ${({ $background }) => $background};
    padding-top: 40px;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size:0.70rem ;
    color: white;
}

@media (min-width: 500px){
    body{
        font-size: 0.95rem;
        background: top / 100vw 30vh no-repeat url('/assets/image/bg-desktop-light.jpg') ${({ $background }) => $background};
    }
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
