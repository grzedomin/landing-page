import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html {
    box-sizing: border-box;
    }
    
    *, ::after ::before {
    box-sizing: inherit;
    }

body {
    background-image: url("img/bg-intro-desktop.png");
    background-color: #ff7a7a;
    font-family: 'Poppins', sans-serif;
}
`;