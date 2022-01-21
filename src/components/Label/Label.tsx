
import React from 'react'
import styled from 'styled-components'

import closeIcon from '../../assets/close.svg'
import tickIcon from '../../assets/tick.svg'

export const Label = ({ valid, text }: { valid: boolean, text?: string }) => {
  return (
    <StyledLabel valid={valid}>
      <img src={valid ? tickIcon : closeIcon} alt='icon' />
      {text}
    </StyledLabel>)
}

//To.do: position should be an option for a label
const StyledLabel = styled.div`
  position:relative;
  padding-right: 9px;
  top: ${({ valid }: { valid?: boolean }) => !valid ? '72px' : '88px'};
  border-radius: 4px;
  background-color: ${({ valid }: { valid?: boolean }) => !valid ? '#C00000' : '#69CC8B'};
  font-size: 12px;
  font-weight: bold;
  color: white;
  display:flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.75px;
  margin-top: -20px;
  margin-left: 120px;
  line-height: 12px;
`