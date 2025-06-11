// src/styles/GlobalStyle.ts
import { createGlobalStyle } from 'styled-components';
import { DefaultTheme } from 'styled-components'; // Import DefaultTheme for typing props

const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
  html {
    font-size: 16px;
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fonts.body};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.6;
    transition: background-color 0.3s ease, color 0.3s ease, font-family 0.3s ease;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
    color: ${({ theme }) => theme.colors.primary};
    margin-top: 0;
    margin-bottom: ${({ theme }) => theme.spacing.medium};
    transition: color 0.3s ease, font-family 0.3s ease;
  }

  a {
    color: ${({ theme }) => theme.colors.accent};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      text-decoration: underline;
    }
  }

  button {
    font-family: ${({ theme }) => theme.fonts.body};
  }

  input, textarea {
    font-family: ${({ theme }) => theme.fonts.body};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.borderRadius};
    padding: ${({ theme }) => theme.spacing.small};
    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;

    &:focus {
      border-color: ${({ theme }) => theme.colors.primary};
      outline: none;
      box-shadow: 0 0 0 2px rgba(${({ theme }) => theme.colors.primary}, 0.2);
    }
  }
`;

export default GlobalStyle;