import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    :root{
        font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
        --primary-color: #000020;
        --secondary-color: #171a4a;
        --gray-1: #0f0f0f;
        --gray-2: #1f1f1f;
        --clear: #2f2c79;
        --white: #fff;
        --dark: #000;
    }

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box
    }
    body{
        background-color: #000;
        color: var(--white);
    }
    .App{
        width: 100%;
        height: 100vh;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;