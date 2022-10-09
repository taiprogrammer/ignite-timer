import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']};
    }

    body {
        -webkit-font-smoothing: antialised;
        color: ${(props) => props.theme['gray-300']};
        background: ${(props) => props.theme['gray-900']};
    }

    body, input, textarea, button {
        font-size: 1rem;
        font-weight: 400;
        font-family: 'Roboto', sans-serif;
    }
`
