import styled from 'styled-components'

import * as theme from '../../model/theme'

export const HeaderContainer = styled.header`
  font-size: 1.5em;
  text-align: center;
  display: flex;
  height: 3em;
  padding-left: 0.5em;
  align-items: center;
`
export const HeaderTitle = styled.div`
  height: 24px;
  color: ${theme.PRIMARY};
  font-size: 21px;
  font-style: italic;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 24px;
`
