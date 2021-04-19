import * as React from 'react'
import {Container, InputContainer} from './styles'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  name: string;
  label: string;
  setState: (value: string) => void;
  state: string;
}

export const Input: React.FC<InputProps> = ({
  name,
  type,
  label,
  setState,
  state,
  ...rest
}) => {
  const [value, setValue] = React.useState<string>('')
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <InputContainer 
        onChange={({target}) => {
          setState ? setState(target.value) : setValue(target.value)
        }}
        value={state || value}
        type={type}
        id={name}
        {...rest}
      />
    </Container>
  )
}