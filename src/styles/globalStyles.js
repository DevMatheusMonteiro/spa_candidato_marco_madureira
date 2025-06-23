import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
    }

    :root {
        --primary: "#005f73";
        --secondary: "#ffb703";
        --accent: "#d62828";
        --neutralLight: "#f1faee";
        --neutralDark: "#333533";
        --background: "#ffffff";
        --fontFamily: "Roboto", sans-serif;
        font-size: 62.5%;
    }

    :-webkit-autofill,
    :-webkit-autofill:hover, 
    :-webkit-autofill:focus {
        border: 0;
        -webkit-text-fill-color: var(--neutralDark);
        -webkit-box-shadow: 0 0 0px 1000px transparent inset;
        transition: background-color 5000s ease-in-out 0s;
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
    
    ::-webkit-scrollbar-thumb:hover{
        filter: brightness(1.8);
    }

    body {
        min-height: 100vh;
        font-family: var(--fontFamily);
        font-size: 1.4rem;
        color: var(--neutralDark);
        background-color: var(--background);
        
        @media (min-width: 1000px) {
            font-size: 1.6rem;
        }
    }
`;
