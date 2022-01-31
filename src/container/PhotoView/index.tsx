import React from 'react'
import { ThemeProvider } from 'styled-components'

import { ButtonLink } from '../../components/Button'
import { Text, Title } from '../../components/Texts'
import { theme } from '../../model/theme'
import { CaptureBox } from '../CaptureBox'
import { Background, Container } from './styles'

export function PhotoView() {
  return (
    <ThemeProvider theme={theme}>
      <Background>
        <Container>
          <div>
            <Title color='#FFFFFF'>Take picture</Title>
            <Text color='#FFFFFF'>
              Fit your ID card inside the frame.
              <br />
              The picture will be taken automatically.
            </Text>
          </div>
          <CaptureBox />
          <ButtonLink text='Cancel' to='/' secondary />
        </Container>
      </Background>
    </ThemeProvider>
  )
}

export default PhotoView
