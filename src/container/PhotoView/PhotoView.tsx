import React from 'react'

import { ButtonLink } from '../../components/Button'
import { Text, Title } from '../../components/Texts'
import { CaptureBox } from '../CaptureBox/CaptureBox'
import { Background, Container } from './styles'

export function PhotoView() {
  return (
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
  )
}

export default PhotoView
