import styled from 'styled-components'
import { HeaderTitleProps } from './types'

export const HeaderContainer = styled.header`
  font-size: 1.5em;
  text-align: center;
  display: flex;
  height: 3em;
  padding-left: 0.5em;
  align-items: center;
`
export const HeaderTitle = styled.div<HeaderTitleProps>`
  height: 24px;
  color: ${(({ color }) => color)};
  font-size: 21px;
  font-style: italic;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 24px;
`
