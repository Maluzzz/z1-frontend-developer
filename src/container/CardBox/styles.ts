import styled from 'styled-components'

import skeletonPlaceholder from '../../assets/id_bg.svg'
import { CardContainerProps } from './types'

export const CardContainer = styled.div<CardContainerProps>`
  width: 260px;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px auto;
  border: ${({ img }) => (img ? '2px' : '0px')} solid
    ${({ valid, theme }) => (valid ? theme.colors.success : theme.colors.error)};
  border-radius: 12px;
  background-image: url(${({ img }) => (img || skeletonPlaceholder)});
  background-size: initial;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: center;
  box-shadow: 0 10px 20px -6px rgba(0,0,0,0.15);
`
export const LabelContainer = styled.div`
    width: fit-content;
    position: relative;
    bottom: 20px;
    left: 140px;
`
export default CardContainer
