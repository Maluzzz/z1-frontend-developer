import React from 'react'
import styled from 'styled-components'

import backgroundImage from '../../assets/bg_photo.png'
import { ButtonLink } from '../../components/Button/'
import { Text, Title } from '../../components/Texts/Texts'
import { CaptureBox } from '../CaptureBox/CaptureBox'

export const PhotoView = () => {
  return (
    <Background>
      <Container>
        <div>
          <Title color='#FFFFFF'>Take picture</Title>
          <Text color='#FFFFFF'>Fit your ID card inside the frame.
            <br />
            The picture will be taken automatically.
          </Text>
        </div>
        <CaptureBox />
        <ButtonLink text='Cancel' to='/' secondary={true} />
      </Container>
    </Background>
  )
}


export const Container = styled.div`{
  display:flex;
  flex-direction: column;
  background-color: rgba(20,28,38,0.75);
  height: 100vh;
  align-items: center;
  justify-content: space-evenly;
}
`
const Background = styled.div`{
  background-image: url(${backgroundImage});
  background-size: cover;
}
`
