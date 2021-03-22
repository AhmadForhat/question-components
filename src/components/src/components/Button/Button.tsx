import * as React from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string,
}

export const Button: React.FC<ButtonProps> = ({
  title,
  ...rest
}) => (
    <>
    <button  {...rest}>
      {title}
  </button>
  </>
)