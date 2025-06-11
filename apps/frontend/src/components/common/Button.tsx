// src/components/common/Button.tsx
import styled from 'styled-components';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger';
}

export const Button = styled.button<ButtonProps>`
  padding: ${({ theme }) => theme.spacing.medium} ${({ theme }) => theme.spacing.large};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border: none;
  font-family: ${({ theme }) => theme.fonts.body};

  ${({ theme, variant }) => {
    switch (variant) {
      case 'secondary':
        return `
          background-color: ${theme.colors.secondary};
          color: white;
          &:hover {
            background-color: ${theme.colors.primary};
          }
        `;
      case 'danger':
        return `
          background-color: ${theme.colors.error};
          color: white;
          &:hover {
            background-color: #c82333; // Darker red
          }
        `;
      case 'primary':
      default:
        return `
          background-color: ${theme.colors.primary};
          color: white;
          &:hover {
            background-color: ${theme.colors.accent};
          }
        `;
    }
  }}
`;