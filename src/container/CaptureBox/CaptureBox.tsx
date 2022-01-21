import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import fetchApi from '../../utils/fetcher'

import { Text } from '../../components/Texts'
import { useCardID } from '../../utils/useCardID'

import bulb from '../../assets/bulb.svg'
import tick from '../../assets/green_icon.svg'
import TextIcon, { ImageCanvas, Video } from './styles'

const constraints = {
  audio: false,
  video: {
    width: 260,
    height: 160,
  },
}

export const CaptureBox = () => {
  const videoElement = useRef<HTMLVideoElement>(null)
  const navigate = useNavigate()
  const { saveCardId } = useCardID()
  const [{ valid, showCanvas, loading }, setState] = useState({
    valid: false,
    showCanvas: false,
    loading: false,
  })
  const removeVideo = (status) => {
    if (videoElement.current.srcObject) {
      const stream = videoElement.current.srcObject as MediaStream
      const tracks = stream.getTracks()
      tracks.forEach((track: any) => {
        track.stop()
      })
      videoElement.current.srcObject = null
      if (videoElement.current.parentNode) {
        videoElement.current.parentNode.removeChild(videoElement.current)
      }
    }
    if (status === 'Accepted') {
      navigate('/')
    }
  }
  const takePhoto = () => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement
    if (!canvas) return
    const context = canvas.getContext('2d')
    context?.drawImage(videoElement.current, 0, 0, canvas.width, canvas.height)

    setState((s) => ({ ...s, loading: true }))
    fetchApi(canvas.toDataURL()).then((res) => {
      const { outcome } = res.summary
      const status = outcome.includes('Approved') ? 'Accepted' : 'Rejected'
      saveCardId({ img: canvas.toDataURL(), status })
      setState({
        valid: outcome.includes('Approved'),
        showCanvas: true,
        loading: false,
      })
      removeVideo(status)
    })
  }

  useEffect(() => {
    if (!videoElement) return
    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
      if (videoElement.current) {
        const video = videoElement.current
        video.srcObject = stream
        video.play()
      }
    })
    setTimeout(() => takePhoto(), 5000)
  }, [videoElement])

  return (
    <div>
      <ImageCanvas id='canvas' valid={valid} showCanvas={showCanvas} />
      <Video ref={videoElement} />
      {loading && <Text color='#FFFFFF'>Checking image... </Text>}
      {valid && (
        <TextIcon>
          <img src={tick} alt='icon' />
          Picture Taken!
        </TextIcon>
      )}
      {!valid && !showCanvas ? (
        <TextIcon>
          <img src={bulb} alt='icon' />
          Room lighting is too low
        </TextIcon>
      ) : (
        ''
      )}
    </div>
  )
}

export default CaptureBox
