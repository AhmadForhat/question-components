import styled from 'styled-components'

export const ButtonStyle = styled.button`
  display: flex;
  justify-content:space-around;
  min-width:200px;
  border:none;
  outline:none;
  background-color: ${({backgroundColor} : {backgroundColor?: string | null}) => backgroundColor};
  color: ${({color} : {color?: string | null}) => color};
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 8px;

  :hover {
    transform: scale(0.98)
  }

  :active {
    transform: scale(1.02)
  }
`;