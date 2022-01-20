import React from 'react'
import styled from 'styled-components'

export const Button = ({ text }: { text: string }) => {
  return (
    <StyledButton>
      {text.toUpperCase()}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  height: 48px;
  width: 160px;
  border: 0;
  box-shadow: 0 10px 20px -5px rgba(47,0,121,0.3);
  color: #FFFFFF;
  border-radius: 24px;
  background-color: #2F0079;
  font-family: Roboto;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.35px;
  line-height: 24px;
`
