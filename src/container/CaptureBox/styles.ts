import styled from 'styled-components'

export const ImageCanvas = styled.canvas<{ valid: boolean; showCanvas: boolean }>`
   {
    border: 2px solid ${({ valid, theme }) => (valid ? theme.colors.success : theme.colors.error)};
    border-radius: 12px;
    display: ${({ showCanvas }) => (showCanvas ? 'block' : 'none')};
  }
`

export const Video = styled.video<{showVideo: boolean}>`
  width: 260px;
  border: 2px solid ${({ theme }) => theme.colors.success};
  border-radius: 12px;
  display: ${({ showVideo }) => (showVideo ? 'block' : 'none')};
`

export const TextIcon = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default TextIcon
