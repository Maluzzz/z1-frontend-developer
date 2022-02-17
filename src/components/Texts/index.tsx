import styled, { css } from 'styled-components'

const commonStyle = css`
  letter-spacing: 0;
  line-height: 24px;
  letter-spacing: 0;
  color: ${({ color }: { color?: string }) => (color || '#000000')};
  text-align: center;
`
export const Title = styled.h1`
  ${commonStyle};
  font-size: 21px;
  font-weight: bold;
  margin: 0;
`
export const Text = styled.p`
  ${commonStyle};
  font-size: 16px;
`
export default Text
