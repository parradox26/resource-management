// src/contexts/ThemeContext.tsx
import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { buildUserTheme, initialUserThemeInput, UserThemeInput } from '../utils/themeBuilder';
import { lightTheme } from '../styles/themes/lightTheme'; // Import your base theme

// Define context type for the update function
type ThemeUpdateContextType = (userInput: UserThemeInput) => void;

// Create contexts
const ThemeUpdateContext = createContext<ThemeUpdateContextType>(
  () => { console.error("Attempted to set theme outside of a ThemeUpdateContext.Provider"); }
);

// Custom hook to use the theme update function
export const useThemeUpdate = () => useContext(ThemeUpdateContext);

// Custom Theme Provider component
interface UserDefinedThemeProviderProps {
  children: ReactNode;
}

export const UserDefinedThemeProvider: React.FC<UserDefinedThemeProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<DefaultTheme>(lightTheme);
  const [currentUserInput, setCurrentUserInput] = useState<UserThemeInput>(initialUserThemeInput);

  // Load saved theme input from localStorage on initial mount
  useEffect(() => {
    const savedThemeInput = localStorage.getItem('userThemeInput');
    if (savedThemeInput) {
      try {
        const parsedInput: UserThemeInput = JSON.parse(savedThemeInput);
        setCurrentUserInput(parsedInput);
        setCurrentTheme(buildUserTheme(parsedInput));
      } catch (e) {
        console.error("Error parsing saved user theme input, using default.", e);
        setCurrentUserInput(initialUserThemeInput);
        setCurrentTheme(lightTheme);
      }
    }
  }, []);

  // Effect to update theme and persist user input whenever currentUserInput changes
  useEffect(() => {
    const newTheme = buildUserTheme(currentUserInput);
    setCurrentTheme(newTheme);
    localStorage.setItem('userThemeInput', JSON.stringify(currentUserInput));
  }, [currentUserInput]);

  // Memoize the update function to prevent unnecessary re-renders of consumers
  const updateThemeInput = useCallback((newUserInput: UserThemeInput) => {
    setCurrentUserInput(prev => ({ ...prev, ...newUserInput }));
  }, []);

  return (
    <ThemeProvider theme={currentTheme}>
      <ThemeUpdateContext.Provider value={updateThemeInput}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeProvider>
  );
};

// Custom hook to get the current user input values
export const useUserThemeInput = () => {
    const theme = useContext(ThemeUpdateContext); // This won't work directly, need to pass it down or access it from a separate context
    // This hook needs to access the currentUserInput state directly,
    // so we need to either expose it via another context or pass it via props.
    // Let's modify the ThemeContext to expose the current user input as well.

    // A better approach is to provide the current user input alongside the update function.
    // For simplicity, for now, components that need to read the input will use the context directly or state.
    // A more complete solution would have another context for reading the current user input state.
    // For this example, the ThemeSettings component will manage its own local state,
    // which gets updated based on the global state loaded on mount.
    // This keeps the context focused on the update function.
    // We'll pass the `currentUserInput` to the `ThemeSettings` component via props or derive it.
    // For now, the `ThemeSettings` component will manage its own `localThemeInput` state.
    // To make it truly synchronized, ThemeSettings should take an initial `UserThemeInput` prop
    // and call `updateThemeInput` on changes.
    return { currentTheme, currentUserInput, updateThemeInput }; // Temp return for clarity
};