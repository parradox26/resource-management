// src/utils/themeBuilder.ts
import { DefaultTheme } from 'styled-components';
import { lightTheme } from '../styles/themes/lightTheme';

// Define the shape of user's customizable theme input
export interface UserThemeInput {
  primaryColor?: string;
  secondaryColor?: string; // Corresponds to accent in DefaultTheme
  backgroundColor?: string;
  textColor?: string;
  headingFont?: string;
  bodyFont?: string; // Add if you want to allow body font customization
  borderRadius?: string;
  // You can add more simplified controls here
}

export const buildUserTheme = (userInput: UserThemeInput): DefaultTheme => {
  // Start with the base light theme as a fallback
  const baseTheme = lightTheme;

  return {
    colors: {
      primary: userInput.primaryColor || baseTheme.colors.primary,
      secondary: userInput.secondaryColor || baseTheme.colors.secondary,
      background: userInput.backgroundColor || baseTheme.colors.background,
      text: userInput.textColor || baseTheme.colors.text,
      accent: userInput.secondaryColor || baseTheme.colors.accent, // Map secondary to accent for consistency
      border: baseTheme.colors.border, // Not user configurable directly for now
      success: baseTheme.colors.success,
      error: baseTheme.colors.error,
    },
    fonts: {
      heading: userInput.headingFont || baseTheme.fonts.heading,
      body: userInput.bodyFont || baseTheme.fonts.body,
    },
    spacing: baseTheme.spacing, // Spacing usually not user configurable at this level
    borderRadius: userInput.borderRadius || baseTheme.borderRadius,
    boxShadow: baseTheme.boxShadow, // Shadow not user configurable directly for now
  };
};

// Initial user input for the default state
export const initialUserThemeInput: UserThemeInput = {
  primaryColor: lightTheme.colors.primary,
  secondaryColor: lightTheme.colors.secondary,
  backgroundColor: lightTheme.colors.background,
  textColor: lightTheme.colors.text,
  headingFont: lightTheme.fonts.heading,
  bodyFont: lightTheme.fonts.body,
  borderRadius: lightTheme.borderRadius,
};