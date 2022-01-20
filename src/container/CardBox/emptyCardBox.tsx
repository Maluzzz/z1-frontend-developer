import React from 'react'
import styled from 'styled-components'

import skeletonPlaceholder from '../../assets/id_skeleton.svg';
import { Button } from '../../components/Button/button';

export const EmptyCardBox = () => {

  return (

    <CardContainer >
      <Button text='Take Picture' />
    </CardContainer>

  )
}

const CardContainer = styled.div`
  background-image: url(${skeletonPlaceholder});
  height: 160px;
  width: 260px;
  display: flex;
  margin:0px auto;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background-color: #FFFFFF;
  box-shadow: 0 10px 20px -6px rgba(0,0,0,0.15);
  margin-bottom: 50px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: center;
`
