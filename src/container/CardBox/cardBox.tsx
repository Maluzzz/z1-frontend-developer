import React from 'react'
import styled from 'styled-components'

import skeletonPlaceholder from '../../assets/id_bg.svg'
import { ButtonLink } from '../../components/Button/'
import { Label } from '../../components/Label/Label'

export type cardImg = {
  status: string,
  img: string,
}

export const CardBox = ({ status, img }: cardImg) => {
  const valid = status === 'Accepted'
  return (
    img === '' ? (<EmptyCardBox />) : (
      <CardContainer valid={valid} img={img}>
        {!valid && <ButtonLink to='/take-photo' text='Retake Picture' />}
        <Label valid={valid} text={status.toUpperCase()} />
      </CardContainer>)
  )
}

const EmptyCardBox = () => {
  return (
    <CardContainer>
      <ButtonLink to='/take-photo' text='Take Picture' />
    </CardContainer>
  )
}



interface CardContainerProps {
  img?: string;
  valid?: boolean;
}

const CardContainer = styled.div<CardContainerProps>`
  width: 260px;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px auto;
  border: ${({ img }) => img ? '2px' : '0px'} solid ${({ valid }) => valid ? '#69CC8B' : '#C00000'} ;
  border-radius: 12px;
  background-image: url(${({ img }) => img ? img : skeletonPlaceholder});
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: center;
`
