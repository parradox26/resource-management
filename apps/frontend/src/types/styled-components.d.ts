// src/types/styled-components.d.ts
import 'styled-components';

// Extend the DefaultTheme to include your custom properties
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
      accent: string;
      border: string;
      success: string;
      error: string;
    };
    fonts: {
      heading: string;
      body: string;
    };
    spacing: {
      xsmall: string;
      small: string;
      medium: string;
      large: string;
      xlarge: string;
    };
    borderRadius: string;
    boxShadow: string;
  }
}