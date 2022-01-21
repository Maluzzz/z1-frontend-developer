import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import fetchApi from '../../utils/fetcher'
import { useNavigate } from 'react-router-dom'
import { Text } from '../../components/Texts/Texts'
import { useCardID } from '../../utils/useCardID'

import bulb from '../../assets/bulb.svg'
import tick from '../../assets/green_icon.svg'

const constraints = {
  audio: false,
  video: {
    width: 260,
    height: 160,
  }
}

export function CaptureBox() {

  const videoElement = useRef<HTMLVideoElement>(null)
  const navigate = useNavigate()
  const { saveCardId } = useCardID()
  const [{ valid, showCanvas, loading }, setState] = useState({ valid: false, showCanvas: false, loading: false })

  useEffect(() => {
    if (!videoElement) return
    navigator.mediaDevices.getUserMedia(constraints)
      .then(stream => {
        if (videoElement.current) {
          const video = videoElement.current
          video.srcObject = stream
          video.play()
        }
      })
    setTimeout(() => takePhoto(), 5000)
  }, [videoElement])

  const takePhoto = () => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement
    if (!canvas) return
    const context = canvas.getContext('2d')
    context?.drawImage(videoElement.current, 0, 0, canvas.width, canvas.height)

    setState(s => ({ ...s, loading: true }))
    fetchApi(canvas.toDataURL()).then((res) => {
      const { outcome } = res.summary
      const status = outcome.includes('Approved') ? 'Accepted' : 'Rejected'
      console.log(outcome)
      saveCardId({ img: canvas.toDataURL(), status })
      setState({ valid: outcome.includes('Approved'), showCanvas: true, loading: false })
      removeVideo()
      if (status === 'Accepted') {
        navigate('/')
      }
    })
  }
  const removeVideo = () => {
    if (videoElement.current.srcObject) {
      const stream = videoElement.current.srcObject as MediaStream
      const tracks = stream.getTracks()
      tracks.forEach(function (track: any) {
        track.stop()
      })
      videoElement.current.srcObject = null
      if (videoElement.current.parentNode)
        videoElement.current.parentNode.removeChild(videoElement.current)
    }
  }

  return (
    <div>
      <ImageCanvas id='canvas' valid={valid} showCanvas={showCanvas} />
      <Video ref={videoElement} />
      {loading && <Text color='#FFFFFF'>'Checking image...' </Text>}
      {valid && <TextIcon><img src={tick} />Picture Taken!</TextIcon>}
      {!valid && !showCanvas ? <TextIcon><img src={bulb} />Room lighting is too low</TextIcon> : ''}
    </div>)
}


const ImageCanvas = styled.canvas<{ valid: boolean, showCanvas: boolean }>`{
 width: 260px;
 height: 160px;
 border: 2px solid ${({ valid }) => valid ? '#69CC8B' : '#C00000'} ;
 border-radius: 12px;
 display: ${({ showCanvas }) => showCanvas ? 'block' : 'none'} ;
}
`

const Video = styled.video`
  width:260px;
  border: 2px solid #69CC8B;
  border-radius: 12px;
`

const TextIcon = styled.div`
  color:white;
  display:flex;
  align-items:center;
  justify-content:center;
`
