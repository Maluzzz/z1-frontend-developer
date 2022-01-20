import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

import backgroundImage from '../../assets/bg_photo.png'


//TO.DO: REFACTOR THIS CODE
const Video = styled.video`
  width:260px;
  border: 2px solid #69CC8B;
  border-radius: 12px;
`

const Container = styled.div`{
  display:flex;
  background-color: rgba(20,28,38,0.75);
  height: 100vh;
  align-items: center;
  justify-content: center;
}

`
const Background = styled.div`{
  background-image: url(${backgroundImage});
  background-size: cover;
}
`
const ImageCanvas = styled.canvas`{
 width: 260px;
 height: 160px;
 border: 2px solid #69CC8B;
 border-radius: 12px;
}
`

export const PhotoView = () => {
  return (
    <Background>
      <Container>
        <VideoFeed />
      </Container>
    </Background>
  )
}

export function VideoFeed() {
  const videoEl = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (!videoEl) {
      return
    }
    const constraints = {
      audio: false,
      video: {
        width: { ideal: 260 },
        height: { ideal: 160 },
      }
    }
    navigator.mediaDevices.getUserMedia(constraints)
      .then(stream => {
        if (videoEl.current) {
          const video = videoEl.current
          video.srcObject = stream
          video.play()
        }
      })
  }, [videoEl])
  const handleButton = () => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement
    if (!canvas || !videoEl.current) {
      return
    }
    const context = canvas.getContext('2d')
    context?.drawImage(videoEl.current, 0, 0, canvas.width, canvas.height)
  }
  return (
    <div>
      <button onClick={() => handleButton()} />
      <ImageCanvas id='canvas' />
      <Video ref={videoEl} />
    </div>)
}

