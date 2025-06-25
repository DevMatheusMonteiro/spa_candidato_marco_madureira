import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --primary: #005f73;
        --secondary: #ffb703;
        --neutralLight: #f1faee;
        --neutralDark: #333533;
        --background: #ffffff;
        --fontFamily: "Roboto", sans-serif;
        font-size: 62.5%;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
        scrollbar-width: thin;
        scrollbar-color: var(--secondary) var(--primary);
    }
    ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
        background-color: var(--primary);
        opacity: 0;
    }
    ::-webkit-scrollbar-thumb {
        cursor: pointer;
        border-radius: 0.8rem;
        background-color: var(--secondary);
    }
    html {
        scroll-behavior: smooth;
    }
    body {
        min-height: 100vh;
        font-family: var(--fontFamily);
        font-size: 1.4rem;
        color: var(--neutralDark);
        background-color: var(--background);
        
        @media (min-width: 768px) {
            font-size: 1.6rem;
        }
    }
    a {
      text-decoration: none;
      color: var(--neutralDark);
    }
`;
