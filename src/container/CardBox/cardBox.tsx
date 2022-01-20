import React from 'react'
import styled from 'styled-components'

import imagenExample from '../../assets/id_card.png';
import { Button } from '../../components/Button/button';

export const CardBox = ({ status }: { status: string }) => {
  const isRejected = status !== 'Accepted'
  return (
    <div>
      <CardContainer isRejected={isRejected}>
        {isRejected ? <Button text='Retake Picture' /> : ''}
        <Label isRejected={isRejected}>{status.toUpperCase()}</Label>
      </CardContainer>

    </div>
  )
}

const CardContainer = styled.div`
  width:260px;
  box-sizing: border-box;
  height: 160px;
  border: 2px solid ${({ isRejected }: { isRejected: boolean }) => isRejected ? '#C00000' : '#69CC8B'} ;
  border-radius: 12px;
  background-image: url(${imagenExample});
  background-size: contain;
  background-size: cover;
  background-size: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin:0px auto;
  justify-content: center;
`


const Label = styled.div`
  height: 30px;
  width: 105px;
  position:relative;
  top: 65px;
  border-radius: 4px;
  background-color: ${({ isRejected }: { isRejected: boolean }) => isRejected ? '#C00000' : '#69CC8B'} ;
  font-size: 12px;
  font-weight: bold;
  color: white;
  display:flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.75px;
  margin-top: -20px;
  margin-left: 120px;
  line-height: 12px;
`