import styled from 'styled-components'

import * as theme from '../../model/theme'

export const ImageCanvas = styled.canvas<{ valid: boolean; showCanvas: boolean }>`
   {
    border: 2px solid ${({ valid }) => (valid ? theme.SUCCESS : theme.ERROR)};
    border-radius: 12px;
    display: ${({ showCanvas }) => (showCanvas ? 'block' : 'none')};
  }
`

export const Video = styled.video`
  width: 260px;
  border: 2px solid ${theme.SUCCESS};
  border-radius: 12px;
`

export const TextIcon = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default TextIcon
