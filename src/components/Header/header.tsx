import React from 'react'
import styled from 'styled-components'

export const Header = ({ logo }: { logo: string }) => {
  return (
    <HeaderContainer>
      <Title>{logo}</Title>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
  font-size: 1.5em;
  text-align: center;
  display: flex;
  height: 3em;
  padding-left: 0.5em;
  align-items: center;
`
const Title = styled.div`
  height: 24px;
  color: #2F0079;
  font-size: 21px;
  font-style: italic;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 24px;
`