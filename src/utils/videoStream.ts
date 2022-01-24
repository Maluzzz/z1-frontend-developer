import { videoConstraint } from '../model/types'

export async function getVideoStream(constraints: videoConstraint) {
  const stream = await navigator.mediaDevices.getUserMedia(constraints)
  return stream
}

export function removeVideoStream(stream: MediaStream) {
  const track = stream.getTracks()
  track[0].stop()
}

export function getCanvasAndContext() {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement
  const context = canvas.getContext('2d')
  canvas.width = 260
  canvas.height = 160

  return { context, canvas }
}
export default getVideoStream
