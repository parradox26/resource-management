// src/styles/themes/lightTheme.ts
import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  colors: {
    primary: '#007bff',       // Blue
    secondary: '#6c757d',      // Gray
    background: '#ffffff',    // White
    text: '#333333',          // Dark gray
    accent: '#ffc107',        // Yellow
    border: '#ced4da',        // Light gray border
    success: '#28a745',       // Green
    error: '#dc3545',         // Red
  },
  fonts: {
    heading: 'Arial, sans-serif',
    body: 'Helvetica, sans-serif',
  },
  spacing: {
    xsmall: '4px',
    small: '8px',
    medium: '16px',
    large: '24px',
    xlarge: '32px',
  },
  borderRadius: '4px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};