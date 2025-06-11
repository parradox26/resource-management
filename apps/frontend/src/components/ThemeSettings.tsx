// src/components/ThemeSettings.tsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useThemeUpdate, UserDefinedThemeProvider } from '../contexts/ThemeContext'; // Import useThemeUpdate
import { UserThemeInput, initialUserThemeInput } from '../utils/themeBuilder'; // Import initial input

const SettingsContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.large};
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
  margin-bottom: ${({ theme }) => theme.spacing.large};
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const FormRow = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

const StyledLabel = styled.label`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.small};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

const StyledInput = styled.input`
  width: 100%;
  box-sizing: border-box; /* Ensures padding doesn't increase width */
`;

const StyledSelect = styled.select`
  width: 100%;
  box-sizing: border-box;
  padding: ${({ theme }) => theme.spacing.small};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;

const availableFonts = [
  'Arial, sans-serif',
  'Helvetica, sans-serif',
  'Verdana, sans-serif',
  'Georgia, serif',
  'Times New Roman, serif',
  'Courier New, monospace',
  'Impact, sans-serif',
];

const availableBorderRadii = ['0px', '4px', '8px', '12px', '50%'];


const ThemeSettings: React.FC = () => {
  const updateGlobalTheme = useThemeUpdate(); // Get the theme update function

  const [localThemeInput, setLocalThemeInput] = useState<UserThemeInput>(initialUserThemeInput);

  // Initialize local state from localStorage on mount (to reflect current app theme)
  useEffect(() => {
    const savedThemeInput = localStorage.getItem('userThemeInput');
    if (savedThemeInput) {
      try {
        setLocalThemeInput(JSON.parse(savedThemeInput));
      } catch (e) {
        console.error("Error loading saved theme input for settings, using default.", e);
        setLocalThemeInput(initialUserThemeInput);
      }
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const newLocalThemeInput = { ...localThemeInput, [name]: value };
    setLocalThemeInput(newLocalThemeInput);
    updateGlobalTheme(newLocalThemeInput); // Push updated input to global theme context
  };

  return (
    <SettingsContainer>
      <h2>Customize Your Theme</h2>
      <FormRow>
        <StyledLabel htmlFor="primaryColor">Primary Color:</StyledLabel>
        <StyledInput
          type="color"
          id="primaryColor"
          name="primaryColor"
          value={localThemeInput.primaryColor || ''}
          onChange={handleChange}
        />
      </FormRow>

      <FormRow>
        <StyledLabel htmlFor="secondaryColor">Accent Color:</StyledLabel>
        <StyledInput
          type="color"
          id="secondaryColor"
          name="secondaryColor"
          value={localThemeInput.secondaryColor || ''}
          onChange={handleChange}
        />
      </FormRow>

      <FormRow>
        <StyledLabel htmlFor="backgroundColor">Background Color:</StyledLabel>
        <StyledInput
          type="color"
          id="backgroundColor"
          name="backgroundColor"
          value={localThemeInput.backgroundColor || ''}
          onChange={handleChange}
        />
      </FormRow>

      <FormRow>
        <StyledLabel htmlFor="textColor">Text Color:</StyledLabel>
        <StyledInput
          type="color"
          id="textColor"
          name="textColor"
          value={localThemeInput.textColor || ''}
          onChange={handleChange}
        />
      </FormRow>

      <FormRow>
        <StyledLabel htmlFor="headingFont">Heading Font:</StyledLabel>
        <StyledSelect
          id="headingFont"
          name="headingFont"
          value={localThemeInput.headingFont || ''}
          onChange={handleChange}
        >
          {availableFonts.map((font) => (
            <option key={font} value={font}>
              {font.split(',')[0]}
            </option>
          ))}
        </StyledSelect>
      </FormRow>

      <FormRow>
        <StyledLabel htmlFor="bodyFont">Body Font:</StyledLabel>
        <StyledSelect
          id="bodyFont"
          name="bodyFont"
          value={localThemeInput.bodyFont || ''}
          onChange={handleChange}
        >
          {availableFonts.map((font) => (
            <option key={font} value={font}>
              {font.split(',')[0]}
            </option>
          ))}
        </StyledSelect>
      </FormRow>

      <FormRow>
        <StyledLabel htmlFor="borderRadius">Border Radius:</StyledLabel>
        <StyledSelect
          id="borderRadius"
          name="borderRadius"
          value={localThemeInput.borderRadius || ''}
          onChange={handleChange}
        >
          {availableBorderRadii.map((radius) => (
            <option key={radius} value={radius}>
              {radius}
            </option>
          ))}
        </StyledSelect>
      </FormRow>
    </SettingsContainer>
  );
};

export default ThemeSettings;