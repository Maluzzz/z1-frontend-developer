import React from 'react'

import { Header } from '../../components/Header'
import { Text, Title } from '../../components/Texts'
import { useCardID } from '../../utils/useCardID'
import { CardBox } from '../CardBox/cardBox'
import Container from './styles'

export function HomeView() {
  const { cardId } = useCardID()
  return (
    <>
      <Header logo='BankClient' />
      <Container>
        <div>
          <Title>Scan your ID</Title>
          <Text>
            Take a picture.
            {' '}
            <br />
            {' '}
            It may take time to validate your personal
            information.
          </Text>
        </div>
        <CardBox {...cardId} />
        <div />
      </Container>
    </>
  )
}

export default HomeView
