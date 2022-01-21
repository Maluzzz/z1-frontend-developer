import styled from 'styled-components'

export const ImageCanvas = styled.canvas<{ valid: boolean; showCanvas: boolean }>`
   {
    width: 260px;
    height: 160px;
    border: 2px solid ${({ valid }) => (valid ? '#69CC8B' : '#C00000')};
    border-radius: 12px;
    display: ${({ showCanvas }) => (showCanvas ? 'block' : 'none')};
  }
`

export const Video = styled.video`
  width: 260px;
  border: 2px solid #69cc8b;
  border-radius: 12px;
`

export const TextIcon = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default TextIcon
