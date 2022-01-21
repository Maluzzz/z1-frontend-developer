import React from 'react'
import { HeaderTitle, HeaderContainer } from './styles'

export function Header({ logo }: { logo: string }) {
  return (
    <HeaderContainer>
      <HeaderTitle>{logo}</HeaderTitle>
    </HeaderContainer>
  )
}

export default Header
