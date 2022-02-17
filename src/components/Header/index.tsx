import React from 'react'
import { useTheme } from 'styled-components'

import { HeaderTitle, HeaderContainer } from './styles'
import { HeaderProps } from './types'

export function Header({ logo }: HeaderProps) {
  const { colors } = useTheme()
  return (
    <HeaderContainer>
      <HeaderTitle color={colors.primary}>{logo}</HeaderTitle>
    </HeaderContainer>
  )
}

export default Header
