import * as React from 'react'

import {ButtonStyle} from './styles'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode,
  color: string,
  backgroundColor: string,
}

export const Button: React.FC<ButtonProps> = ({
  children,
  backgroundColor,
  color,
  ...rest
}) => (
  <ButtonStyle  
    color={color}
    backgroundColor={backgroundColor}
    {...rest}
  >
      {children}
  </ButtonStyle>
)