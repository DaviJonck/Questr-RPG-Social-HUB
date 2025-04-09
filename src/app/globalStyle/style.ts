'use client';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #2a2a2a;
    font-family: 'Poppins', sans-serif;
    color: #e0e0e0;
  }

  * {
    box-sizing: border-box;
  }
`;
