import React from 'react'
import styled from 'styled-components'

import { Header } from '../../components/Header/header'
import { CardBox } from '../CardBox/cardBox'

export const HomeView = () => {
  return (
    <Container>
      <Header logo='BankClient' />
      <CardBox status='Rejected' />
    </Container>
  )
}

const Container = styled.div`
  display:flex;
  flex-direction: column;

`