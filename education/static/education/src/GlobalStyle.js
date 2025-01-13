import { createGlobalStyle } from "styled-components";
import font from "./assets/global/fonts/Merriweather-Regular.ttf";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "Merriweather";
        src: url(${font}) format("truetype");
    }

    * {
        box-sizing: border-box;
    }

    html, body {
        height: 100%;
        margin: 0;
        padding: 0;
    }

    #root {
        height: 100%;
    }

    body {
        font-family: "Merriweather", serif;
    }
`;

export default GlobalStyle;
