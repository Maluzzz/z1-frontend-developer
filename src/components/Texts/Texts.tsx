import styled from 'styled-components'

export const Title = styled.h1`
  font-size: 21px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 24px;
  text-align: center;
  margin: 0;
  color: ${({ color }: { color?: string }) => color ? color : '#000000'} ;
`
export const Text = styled.p`
  font-size: 16px;
  letter-spacing: 0;
  line-height: 24px;
  text-align: center;
  color: ${({ color }: { color?: string }) => color ? color : '#000000'} ;
`
