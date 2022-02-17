import styled from 'styled-components'
import { LabelProps } from './types'

export const LabelBox = styled.div<LabelProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 9px;
  border-radius: 4px;
  background-color: ${({ color, theme }) => (color || theme.colors.success)};
  font-size: 12px;
  font-weight: bold;
  color: white;
  letter-spacing: 0.75px;
  line-height: 12px;
`
export default LabelBox
