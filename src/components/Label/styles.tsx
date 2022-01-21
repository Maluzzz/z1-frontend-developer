import styled from 'styled-components'

export const LabelBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 9px;
  border-radius: 4px;
  background-color: ${({ color }: { color?: string }) => (color || '#69CC8B')};
  font-size: 12px;
  font-weight: bold;
  color: white;
  letter-spacing: 0.75px;
  line-height: 12px;
`
export default LabelBox
