import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --background: #111;
    --background-lighter: #141414;
    --red: #E50914;
    --green: #46d369;
    --gray: #999;
    --white: #fff;
  }
  /* Set font-size to lower devices */
  @media(max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }
  @media(max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }
  
  /* CSS RESET */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: var(--background);
    color: var(--white);
  }
  body, input, textarea, button {
    font: 400 1rem "Roboto", sans-serif;
  }
  button {
    cursor: pointer;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  button:focus {
    outline-offset: 0px;
    outline: 0px auto -webkit-focus-ring-color;
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
