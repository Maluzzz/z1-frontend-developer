import React from 'react'
import { ThemeProvider } from 'styled-components'

import { Header } from '../../components/Header'
import { Text, Title } from '../../components/Texts'
import { theme } from '../../model/theme'
import { useCardID } from '../../utils/useCardID'
import { CardBox } from '../CardBox'
import Container from './styles'

export function HomeView() {
  const { cardId } = useCardID()
  return (
    <ThemeProvider theme={theme}>
      <Header logo='BankClient' />
      <Container>
        <div>
          <Title>Scan your ID</Title>
          <Text>
            Take a picture.
            <br />
            It may take time to validate your personal
            information.
          </Text>
        </div>
        <CardBox {...cardId} />
      </Container>
    </ThemeProvider>
  )
}

export default HomeView
