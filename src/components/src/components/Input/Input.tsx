import * as React from 'react'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  name: string;
  label: string;
}

export const Input: React.FC<InputProps> = ({
  name,
  type,
  label,
  ...rest
}) => (
  <>
  <label htmlFor={name}>{label}</label>
  <input type={type} id={name} {...rest} />
  </>
)