import React from 'react'
import styled from 'styled-components'

import { Header } from '../../components/Header/header'
import { Text, Title } from '../../components/Texts/Texts'
import { useCardID } from '../../utils/useCardID'
import { CardBox } from '../CardBox/cardBox'

export const HomeView = () => {
  const { cardId } = useCardID()
  return (
    <>
      <Header logo='BankClient' />
      <Container>
        <div>
          <Title>Scan your ID</Title>
          <Text>Take a picture. <br /> It may take time to validate your personal information.</Text>
        </div>
        <CardBox {...cardId} />
        <div />
      </Container>
    </>
  )
}

const Container = styled.div`
  height: 80vh;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`