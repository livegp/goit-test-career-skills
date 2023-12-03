import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${normalize}

${reset}

:root {
  --trans: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

[data-theme='light'] {
  --accent: 52, 112, 255;
  --bg-primary: 237,240,245;
  --bg-secondary: 99,123,173;
  --bg-innert: 0,0,0;
  --text: 58,87,149;
  --text-primary: 237,240,245;
  --text-secondary: 58,87,149;
  transition: var(--trans);
}

[data-theme='dark'] {
  --accent: 52, 112, 255;
  /* --bg-primary: 51,51,51; */
  --bg-primary: 0,0,0;
  --bg-secondary: 51,51,51;
  --bg-innert: 237,240,245;
  --text: 173,185,211;
  --text-primary: 237,240,245;
  --text-secondary: 58,87,149;
  transition: var(--trans);
}

*,
::after,
::before {
    box-sizing: border-box;
}

html {
  height: 100%;
  scroll-behavior: smooth;
}

body {
  height: 100%;
  margin: 0;
  font-family: 'Manrope', sans-serif;
  overflow-y: scroll;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: rgba(var(--bg-primary), 1);
  color: var(--text-primary);
}

body::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

body::-webkit-scrollbar-track {
  background: rgba(var(--accent), 0.5);
}

body::-webkit-scrollbar-thumb {
  background: rgba(var(--accent), 1);
}

body::-webkit-scrollbar-thumb:hover {
  background: rgba(var(--accent), 0.7);
}

body::-webkit-scrollbar-thumb:active {
  background: rgba(var(--accent), 1);
}

a, a:visited, a:hover {
    text-decoration: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

#root {
  height: 100%;
}
`;

export default GlobalStyle;
