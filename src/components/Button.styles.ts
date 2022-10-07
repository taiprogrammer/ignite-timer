import styled, { css } from 'styled-components'
import { defaultTheme } from '../styles/themes/default.styles'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonContainerProps {
  variant: ButtonVariant
}

const buttonVariants = {
  primary: 'purple',
  secondary: 'pink',
  success: 'green',
  danger: 'red',
}

const buttonColorVariants = {
  primary: '#FFF',
  secondary: '#000',
  success: '#FFF',
  danger: '#FFF',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  border: 0;
  width: 100px;
  height: 40px;
  margin: 0.5rem;
  border-radius: 4px;
  cursor: alias;

  ${(props) => {
    return css`
      background-color: ${props.theme['green-500']};
      color: ${defaultTheme.white};
    `
  }}/* ${(props) => `background-color: ${buttonVariants[props.variant]}`};
    ${(props) => `color: ${buttonColorVariants[props.variant]}`}; */
`
