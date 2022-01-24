import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import fetchApi from '../../utils/fetcher'
import { Text } from '../../components/Texts'
import { useCardID } from '../../utils/useCardID'
import bulb from '../../assets/bulb.svg'
import tick from '../../assets/green_icon.svg'
import TextIcon, { ImageCanvas, Video } from './styles'
import getVideoStream, { getCanvasAndContext, removeVideoStream } from '../../utils/videoStream'

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

  const removeVideo = (status: string) => {
    removeVideoStream(videoElement.current!.srcObject as MediaStream)
    if (status === 'Accepted') {
      navigate('/')
    }
  }
  const takePhoto = () => {
    if (!videoElement.current) return
    const { context, canvas } = getCanvasAndContext()
    context?.drawImage(videoElement.current, 0, 0, canvas.width, canvas.height)
    setState((s) => ({ ...s, loading: true, showCanvas: true }))
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
    getVideoStream(constraints).then((stream) => {
      videoElement.current!.srcObject = stream
      videoElement.current!.play()
      setTimeout(() => takePhoto(), 5000)
    }).catch(() => {})
  }, [videoElement])

  return (
    <div>
      <ImageCanvas id='canvas' valid={loading ? true : valid} showCanvas={showCanvas} />
      <Video ref={videoElement} showVideo={!showCanvas} />
      {loading && <Text color='#FFFFFF'>Checking image... </Text>}
      {valid && showCanvas ? (
        <TextIcon>
          <img src={tick} alt='icon' />
          Picture Taken!
        </TextIcon>
      ) : (
        <TextIcon>
          <img src={bulb} alt='icon' />
          Room lighting is too low
        </TextIcon>
      ) }
    </div>
  )
}

export default CaptureBox
